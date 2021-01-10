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
import { initFirebase } from '../utils/firebase'

const firebase = initFirebase()

type Props = {
}

const Index = (props: Props) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const router = useRouter()

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  if (user) {
    router.replace('/info')
  }

  const _signIn = (e: any) => {
    firebase.auth().signInWithEmailAndPassword(username, password);
  }

  const _logout = () => {
    firebase.auth().signOut();
  };

  console.log(user, loading, error)
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
              <p className="text-4xl font-extrabold leading-10 text-gray-900">Login</p>
              <Link href="/register" passHref>
                <a className="text-base font-bold leading-normal text-principal">{">"} Registro</a>
              </Link>
            </div>
            <Input
              label="Email"
              placeholder="test@example.com"
              type="email"
              onChange={e => setusername(e.target.value)}
              Icon={AlternateEmail}
            />
            <Input
              label="Contraseña"
              placeholder="*****"
              type="password"
              Icon={VpnKey}
              onChange={e => setpassword(e.target.value)}
            />
            {error && <div>
              {error}
            </div>
            }
            <div className="w-64 h-10">
              <Button
                className="w-full h-full"
                onClick={_signIn}
              >
                Login
              </Button>
            </div>
            {/* <div className="w-full h-36">
              <div className="relative" style={{ width: 360, height: 139, }}>
                <div className="inline-flex items-end justify-center pt-24 w-96 h-36 bg-white rounded-2xl">
                  <div className="opacity-50 w-full h-full bg-yellow-400"></div>
                </div>
                <div className="opacity-50 w-96 h-32 absolute left-0 top-0 bg-yellow-400 bg-opacity-40"></div>
              </div>
            </div> */}
          </div>
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

export default Index
