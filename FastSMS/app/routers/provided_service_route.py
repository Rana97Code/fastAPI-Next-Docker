from fastapi import APIRouter, Depends, HTTPException
from typing import Union,List,Optional
from sqlalchemy.orm import Session
from app.models.provided_service import ProServiceCreateSchema,ServiceProductSchema,Provided_service
from app.models.products import Product
from app.models.customers import Customer
from app.models.units import Unit
from app.config import engine, Base, SessionLocal, get_db
from datetime import datetime, date,timedelta
from dateutil.relativedelta import relativedelta
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

p_service_router = APIRouter()


# date_now = (purchase_date.year)
# date_2 = date_now.replace(year=years_to_add).strftime('%Y-%m-%d')

@p_service_router.post("/add_Provided_service")
def create(p_p:ProServiceCreateSchema,db:Session=Depends(get_db)):
    srv=Provided_service(product_id=p_p.product_id,customer_id=p_p.customer_id,p_qty=p_p.p_qty,purchase_date=p_p.purchase_date,service_time=p_p.service_time, 

                        #  expiry_date=str(int(p_p.purchase_date[0:4])+int(p_p.service_time)) + p_p.purchase_date[4:10],
                         expiry_date=datetime.strptime(p_p.purchase_date, '%Y-%m-%d') + relativedelta(years=int(p_p.service_time)),
                         renew_date = datetime.strptime(p_p.purchase_date, '%Y-%m-%d').date() + relativedelta(years=int(p_p.service_time))-relativedelta(months=3)
                         )
    db.add(srv)
    db.commit()
    return {"Message":"Successfully Add"}

@p_service_router.get("/Provided_services",response_model=List[ServiceProductSchema])
def index(db:Session=Depends(get_db)):
    p_p = db.query(Provided_service,Product,Customer,Unit).join(Product, Provided_service.product_id == Product.id ).join(Customer, Provided_service.customer_id == Customer.id )\
    .join(Unit, Product.unit_id == Unit.id )\
    .add_columns( Product.product_name,Customer.customer_name,Provided_service.p_qty,Unit.unit_name, Provided_service.purchase_date,Provided_service.service_time,Provided_service.expiry_date,Provided_service.renew_date).all()
    p_pro = []
    for pp in p_p:
        # print(pp.product_name, pp.customer_name,pp.unit_name)
        p_pro.append({
            'product_name':pp.product_name,
            'customer_name':pp.customer_name,
            'p_qty':pp.p_qty,
            'unit_name':pp.unit_name,
            'purchase_date':pp.purchase_date,
            'expiry_date':pp.expiry_date,
            'service_time':pp.service_time,
            'renew_date':pp.renew_date
            })

    junit = jsonable_encoder(p_pro)
    return JSONResponse(content=junit)
    # return db.query(Provided_service).all()

@p_service_router.get("/get_Provided_service/{pp_id}",response_model=ServiceProductSchema)
def get_itm(pp_id:int,db:Session=Depends(get_db)):
    try:
        u=db.query(Provided_service).filter(Provided_service.id == pp_id).first()
        return (u)
    except:
        return HTTPException(status_code=422, details="Purchase Product not found")

@p_service_router.put("/update_Provided_service/{pp_id}")
def update(pp_id:int,p_product:ProServiceCreateSchema,db:Session=Depends(get_db)):
    try:
        u=db.query(Provided_service).filter(Provided_service.id==pp_id).first()
        u.product_id=p_product.product_id,
        u.customer_id=p_product.customer_id,
        u.purchase_date=p_product.purchase_date,
        # u.expiry_date=p_product.expiry_date,
        # u.renew_date=p_product.renew_date,
        u.service_time=p_product.service_time
        db.add(u)
        db.commit()
        return {"Message":"Successfully Update"}
    except:
        return HTTPException(status_code=404,detail="Update Uncessfull")

@p_service_router.delete("/delete_Provided_service/{pp_id}",response_class=JSONResponse)
def get_itm(pp_id:int,db:Session=Depends(get_db)):
    try:
        u=db.query(Provided_service).filter(Provided_service.id==pp_id).first()
        db.delete(u)
        db.commit()
        return {"Provided_service has been deleted"}
    except:
        return HTTPException(status_code=422, details="user not found")