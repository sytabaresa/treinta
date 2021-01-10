import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

type Props = {
}

const Index = (props: Props) => {

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
