"use client";
import Head from 'next/head';

import PrivateRoute from './user/preventRoute'

export default function Home() {
  return (

    <PrivateRoute />

  )
}
