import Head from 'next/head'
import { VpnKey, AlternateEmail } from "@styled-icons/material"
import { useState } from 'react'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router'

import Container from '../components/container'
import Layout from '../components/layout'
import { Button } from "../components/button"
import { Input } from '../components/input'
import Footer from '../components/footer'
import { initFirebase } from '../lib/firebase'

const firebase = initFirebase()

type Props = {
}


const errorMsgMap: { [key: string]: string } = {
  'auth/invalid-email': 'El correo electrónico está mal escrito',
  'auth/wrong-password': 'La contraseña es inválida o el usuario no tiene clave',
  'auth/user-not-found': 'Este usuario no existe',
  'default': 'error desconocido'
}

const Index = (props: Props) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const router = useRouter()

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [errorMsg, seterrorMsg] = useState(null as { errorCode: string, errorMessage: string } | null)

  if (!loading && user) {
    router.replace('/info')
  }

  const _signIn = async (e: any) => {
    seterrorMsg(null)
    try {
      await firebase.auth().signInWithEmailAndPassword(username, password)
      console.log(user)
      router.replace('/info')
    } catch (error: any) {
      // console.log(error)
      seterrorMsg({
        errorCode: error.code,
        errorMessage: error.message,
      })
    }
  }


  // console.log(user, loading, error)
  return (
    <>
      <Layout fullScreen>
        <p className={`fixed right-2 bottom-2 transition duration-500 ease-in-out	bg-red-300 w-full py-2 rounded-lg text-center text-white ${errorMsg ? 'opacity-100' : 'opacity-0'}`}>
          {errorMsgMap[errorMsg?.errorCode as string] || errorMsgMap['default']}
        </p>
        <Head>
          <title>Treinta</title>
        </Head>
        <Container>
          <div className="flex flex-col space-y-7 items-center justify-start pt-8 bg-white">
            <img className="w-44 h-16 lg:my-10" src="/assets/logo.png" />
            <div className="flex justify-between items-center w-96 px-10">
              <p className="text-4xl font-extrabold leading-10 text-gray-900">Login</p>
              <Link href="/register" passHref>
                <a className="text-base font-bold leading-normal text-principal">{">"} Registro</a>
              </Link>
            </div>
            <Input
              label="Email"
              placeholder="test@example.com"
              type="email"
              onChange={e => { seterrorMsg(null); setusername(e.target.value) }}
              Icon={AlternateEmail}
            />
            <Input
              label="Contraseña"
              placeholder="*****"
              type="password"
              Icon={VpnKey}
              onChange={e => { seterrorMsg(null); setpassword(e.target.value) }}
            />
            <div className="w-64 h-10">
              <Button
                className="w-full h-full lg:mt-6"
                onClick={_signIn}
              >
                Login
              </Button>
            </div>
          </div>
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

export default Index
