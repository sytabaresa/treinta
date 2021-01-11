import Head from 'next/head'
import { Face, AlternateEmail, VpnKey } from "@styled-icons/material"

import Container from '../components/container'
import Layout from '../components/layout'
import { Button } from "../components/button"
import { Input } from '../components/input'
import Footer from '../components/footer'
import Link from 'next/link'
import { useState } from 'react'
import { initFirebase } from '../lib/firebase'
import { useRouter } from 'next/router'

const firebase = initFirebase()

type Props = {
}

const errorMsgMap: { [key: string]: string } = {
  'auth/invalid-email': 'El correo electrónico está mal escrito',
  'auth/wrong-password': 'La contraseña es inválida o el usuario no tiene clave',
  'auth/password-missmatch': 'Las contraseñas no coinciden',
  'auth/weak-password': 'La contraseña debe tener 6 caracteres o más',
  'default': 'error desconocido'
}


const Index = (props: Props) => {
  const router = useRouter()

  const [data, setdata] = useState({
    username: '',
    password: '',
    passwordRepeat: '',
    fullName: ''
  })

  const [errorMsg, seterrorMsg] = useState(null as { errorCode: string, errorMessage: string } | null)

  const _register = async (e: any) => {

    if (data.password != data.passwordRepeat) {
      seterrorMsg({
        errorCode: 'auth/password-missmatch',
        errorMessage: ''
      })
      return
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(data.username, data.password)
      router.replace('/login')
    } catch (error) {
      seterrorMsg({
        errorCode: error.code,
        errorMessage: error.message,
      })
    }

  }

  const _onChange = (e: any) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Layout fullScreen>
        <p className={`fixed right-2 bottom-2 transition duration-500 ease-in-out	bg-red-300 w-full h-10 py-2 rounded-lg text-center text-white ${errorMsg ? 'opacity-100' : 'opacity-0'}`}>
          {errorMsgMap[errorMsg?.errorCode as string] || errorMsgMap['default']}
        </p>
        <Head>
          <title>Treinta</title>
        </Head>
        <Container>
          <div className="flex flex-col space-y-7 items-center justify-start pt-8 bg-white">
            <img className="w-44 h-16 lg:my-10" src="/assets/logo.png" />
            <div className="flex justify-between items-center w-96 px-10">
              <p className="text-4xl font-extrabold leading-10 text-gray-900">Registro</p>
              <Link href="/login" passHref>
                <a className="text-base font-bold leading-normal text-principal">{">"} Login</a>
              </Link>
            </div>
            <Input
              label="Nombre Completo"
              placeholder="mi nombre"
              name="fullName"
              onChange={_onChange}
              Icon={Face}
            />
            <Input
              label="Email"
              placeholder="test@example.com"
              type="email"
              name="username"
              onChange={_onChange}
              Icon={AlternateEmail}
            />
            <Input
              label="Contraseña"
              placeholder="*****"
              type="password"
              name="password"
              onChange={_onChange}
              Icon={VpnKey}
            />
            <Input
              label="Repetir Contraseña"
              placeholder="*****"
              type="password"
              name="passwordRepeat"
              onChange={_onChange}
              Icon={VpnKey}
            />
            <div className="w-64 h-10">
              <Button
                onClick={_register}
                className="w-full h-full lg:mt-6"

              >
                Registrarse
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
