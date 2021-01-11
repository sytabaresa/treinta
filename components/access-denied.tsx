import { route } from 'next/dist/next-server/server/router'
import React from 'react'
import { useRouter } from 'next/router'
import Container from './container'
import Footer from './footer'

export default function AccessDenied() {
  const router = useRouter()
  
  return (
    <>
      <Container className="flex flex-col items-center justify-center">
        {/* <div className="flex flex-col items-center justify-center w-full h-full"> */}
        <h1 className="text-4xl font-bold text-principal mb-6">Acceso Denegado</h1>
        <p className="text-xl">Tienes que loguearte para ver esta página</p>
        <a
          href="/api/auth/signin"
          className="text-3xl my-4 font-bold"
          onClick={(e) => {
            e.preventDefault()
            router.push('/login')
          }}>&gt; Login</a>
        {/* </div> */}
      </Container>
      <Footer />
    </>
  )
}
