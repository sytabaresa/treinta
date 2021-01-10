
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
          <div className="inline-flex flex-col space-y-14 items-center justify-start pl-8 pr-12 pt-20 pb-28 w-96 bg-white">
            <p className="text-4xl font-extrabold leading-10 text-gray-900">Login</p>
            <p className="text-base font-bold leading-normal text-gray-900">Registro</p>
            <div className="flex flex-col items-start justify-start w-64">
              <p className="w-full h-6 text-sm font-semibold leading-tight text-gray-500">Ususario</p>
              <div className="inline-flex space-x-2 items-center justify-end p-2 w-full h-10 bg-white border rounded-lg border-gray-200">
                <p className="w-52 text-base leading-snug text-gray-300">Daniel</p>
                <div className="w-6 h-full bg-gray-400 rounded"></div>
                </div>
                </div>
            <div className="flex flex-col items-start justify-start w-64">
              <p className="w-full h-6 text-sm font-semibold leading-tight text-gray-500">Contraseña</p>
              <div className="inline-flex space-x-2 items-center justify-end p-2 w-full h-10 bg-white border rounded-lg border-gray-200">
                <p className="w-52 text-base leading-snug text-gray-300">*****</p>
                <div className="w-6 h-full bg-gray-400 rounded"></div>
                </div>
                </div>
            <div className="w-64 h-10">
              <div className="flex items-center justify-center py-2 px-28 w-full h-full bg-yellow-300 rounded-lg">
                <div className="flex space-x-2 items-center justify-start h-full">
                  <p className="text-sm font-bold text-center text-gray-700">Login</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index
