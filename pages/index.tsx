import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

type Props = {
}

const Index = (props: Props) => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/login')
    return () => {
    }
  }, [])
  
  return (
    <>
      <Layout>
        <Head>
          <title>Treinta</title>
        </Head>
        <Container>
        </Container>
      </Layout>
    </>
  )
}

export default Index
