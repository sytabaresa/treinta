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

const Index = (props: Props) => {
  const router = useRouter()

  const [data, setdata] = useState({
    username: '',
    password: '',
    passwordRepeat: '',
    fullName: ''
  })

  const _register = async (e: any) => {

    if (data.password != data.passwordRepeat) {
      return
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(data.username, data.password)
      router.replace('/login')
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
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
        <Head>
          <title>Treinta</title>
        </Head>
        <Container>
          <div className="flex flex-col space-y-7 items-center justify-start pt-8 bg-white">
            <img className="w-44 h-16" src="/assets/logo.png" />
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
              <Button onClick={_register}>
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
