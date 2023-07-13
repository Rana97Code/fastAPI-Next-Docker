"use client";
import Head from 'next/head'

import PrivateRoute from './user/preventRoute'

export default async function Home() {
  return (
    <>
    <main>
      <PrivateRoute />
    </main>
    </>
  )
}
