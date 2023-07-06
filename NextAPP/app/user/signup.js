import React, { useState,useEffect }  from "react";
import { useRouter } from 'next/router';
import { NativeBaseProvider, Text, Box, Heading,Form, FormControl,Stack,Input,WarningOutlineIcon,Center, VStack, Button, Link } from "native-base";

export default function Signup() {

  const [user_name,setName]=useState("");
  const [user_email,setEmail]=useState("");
  const [user_phone,setPhone]=useState("");
  const [user_password,setPass]=useState("");
  const [confirm_password,setCpass]=useState("");

  // const navigate = useNavigate(); //for redirect
  // for validation
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});


  const router = useRouter();


  const validate = () => {
    if (formData.user_name === undefined) {
      setErrors({ ...errors,
        user_name: 'Name is required'
      });
      return false;
    } else if (formData.user_name.length < 3) {
      setErrors({ ...errors,
        user_name: 'Name is too short'
      });
      return false;
    }

    return true;
  };


    useEffect(()=>{
      const auth= localStorage.getItem('user');
      // onSubmit();   //create this function
  },[])  //Use array

const onSubmit = async (e)=>{
    validate() ? console.log('Submitted') : console.log('Validation Failed');
     //console.warn(!product_name );
    if(!user_name || !user_email || !user_phone || !user_password || !confirm_password)  ///from validation
    {
        setErrors(true)
        return false;
    }

    console.warn(user_name,user_email,user_phone,user_password,confirm_password);
    // const user_id= JSON.parse(localStorage.getItem('user'))._id;   //for get logedin userid
    let result = await fetch(process.env.NEXT_PUBLIC_API_URL + `/create_user`,{
        method: 'post',
        body:JSON.stringify({user_name,user_email,user_phone,user_password,confirm_password}),
        headers:{
            'Content-type':'application/json',
        }
    });

    if(result.ok){
      const data = await result.json();
      alert("Registration Successfull")
      localStorage.setItem("user",JSON.stringify(data));  //for storing data in localStoreg for checking user log in or not and create field "user" to store data
      sessionStorage.setItem("access_token",data.access_token);
      router.push('/dboard/dboard')
    }else{
      router.push('/user/signup')
    }

    // }
}



  return (
    <NativeBaseProvider>
    <Center flex={1}  _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} >
      <Box w="20%">

        <Heading size="lg" color="coolGray.800" _dark={{color: "warmGray.50"}} fontWeight="semibold">  Welcome </Heading>

        <FormControl isRequired isInvalid={'user_name' == errors}>
          <Stack mx="2">
            <FormControl.Label>User Name</FormControl.Label>
            <Input _light={{  bg: "coolGray.100", _hover: { bg: "coolGray.200"}, _focus: { bg: "coolGray.200:alpha.70"}}} _dark={{bg: "coolGray.800", _hover: {
              bg: "coolGray.900"
            }
          }} shadow={2} type="text" value={user_name} onChange={(e)=>setName(e.target.value)} name="user_name" placeholder="Enter your name" />
            <FormControl.HelperText>
              Use your Username.
            </FormControl.HelperText>
            {'user_name' == errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> :
            <FormControl.HelperText leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.HelperText>}


            <FormControl.Label>User Email</FormControl.Label>
            <Input _light={{  bg: "coolGray.100", _hover: { bg: "coolGray.200"}, _focus: { bg: "coolGray.200:alpha.70"}}} _dark={{bg: "coolGray.800", _hover: {
              bg: "coolGray.900"
            }
          }} shadow={2} type="email" value={user_email} onChange={(e)=>setEmail(e.target.value)} name="user_email" placeholder="user@email.com" />
            <FormControl.HelperText>
             Enter your User Email.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>



            <FormControl.Label>User Phone</FormControl.Label>
            <Input _light={{  bg: "coolGray.100", _hover: { bg: "coolGray.200"}, _focus: { bg: "coolGray.200:alpha.70"}}} _dark={{bg: "coolGray.800", _hover: {
              bg: "coolGray.900"
            }
          }} shadow={2} type="text" value={user_phone} onChange={(e)=>setPhone(e.target.value)} name="user_phone" placeholder="01*********" />
            <FormControl.HelperText>
              Enter your Phone Number.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 11 characters are required.
            </FormControl.ErrorMessage>




            <FormControl.Label>Password</FormControl.Label>
            <Input _light={{  bg: "coolGray.100", _hover: { bg: "coolGray.200"}, _focus: { bg: "coolGray.200:alpha.70"}}} _dark={{bg: "coolGray.800", _hover: {
              bg: "coolGray.900"
            },
            _focus: {
              bg: "coolGray.900:alpha.70"
            }
          }} shadow={2} type="password" value={user_password} onChange={(e)=>setPass(e.target.value)} name="user_password"  placeholder="password" />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>



            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input _light={{  bg: "coolGray.100", _hover: { bg: "coolGray.200"}, _focus: { bg: "coolGray.200:alpha.70"}}} _dark={{bg: "coolGray.800", _hover: {
              bg: "coolGray.900"
            },
            _focus: {
              bg: "coolGray.900:alpha.70"
            }
          }} shadow={2} type="password" value={confirm_password} onChange={(e)=>setCpass(e.target.value)} name="confirm_password" placeholder="password" />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>

            <VStack space={4} alignItems="center">
            {["md"].map(size => <Button key={size} size={size} onPress={onSubmit}>
                Submit
                </Button>)}
            </VStack>

            <Text>I already have registration   <Box><Link _text={{ fontSize: "m", _light: { color: "cyan.500" }, color: "cyan.300"  }} 
                href="http://localhost:3000" isUnderlined _hover={{  _text: { _light: {color: "cyan.600" }, color: "cyan.400" }}}>
                Sign In Here.</Link></Box></Text>


          </Stack>
        </FormControl>
      </Box>
      </Center>
    </NativeBaseProvider>
      //  <Text>
      //     <h3>Hellow nativebase</h3>
      // </Text>
  );
}

