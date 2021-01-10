import { signIn } from 'next-auth/client'
import React from 'react'
import Container from './container'
import Footer from './footer'

export default function AccessDenied() {
  return (
    <>
      <Container className="container mx-auto flex-1 flex flex-col items-center justify-center">
        {/* <div className="flex flex-col items-center justify-center w-full h-full"> */}
        <h1 className="text-4xl font-bold text-principal">Acceso Denegado</h1>
        <p className="text-xl">Tienes que loguearte para ver esta página</p>
        <a
          href="/api/auth/signin"
          className="text-3xl my-4 font-bold"
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}>Login</a>
        {/* </div> */}
      </Container>
      <Footer />
    </>
  )
}
