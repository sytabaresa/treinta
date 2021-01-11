import Head from "next/head";
import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import { Menu } from "../components/menu";
import ProtectedWrapper from "../components/protectedWrapper";
import { Info } from '@styled-icons/material'
import { Card } from "../components/card";
import Image from 'next/image'

const pageTitle = 'Información'
export interface Infoprops {

}

const InfoPage = (props: Infoprops) => {

  const data = [
    {
      title: 'Obtén un control eficaz de su flujo de caja',
      description: 'Registra diligentemente las ventas, los gastos y las cuentas por cobrar y calcula la utilidad de tu negocio fácilmente.',
      src: '/assets/bg1.jpg'
    },
    {
      title: 'Automatiza tu negocio y obtén resultados precisos',
      description: 'Sin complicaciones de cálculos manuales. Todos los números se calculan automáticamente.',
      src: '/assets/bg2.jpg'
    },
    {
      title: 'Ahorra tiempo y dedícalo en lo que más te gusta',
      description: 'Ten más libertad para administrar tu tiempo en el negocio, pasar más tiempo en familia y disfrutar de tus pasiones.',
      src: '/assets/bg3.jpg'
    }
  ]

  return (
    <ProtectedWrapper>
      <Layout footer>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Menu
          title={pageTitle}
          Icon={Info}
        />
        <Container>
          <div className="pt-12 mx-4 relative">
            {/* <img src="/assets/lines1.svg" alt="lines" className="overflow-img absolute" style={{ width: '500vw', right: '-15px' }} /> */}
            <h1 className="text-6xl font-bold ml-4 mb-4">Beneficios:</h1>
            {data.map(({ title, src, description }, index) =>
              <div key={index} className="inline-flex flex-col items-start justify-start shadow-lg w-full md:w-1/2 my-2 rounded-md">
                <div className="flex flex-col items-end justify-start p-4 w-full bg-white border rounded-lg border-gray-200">
                  <div className="w-full h-48 rounded-lg relative">
                    <Image layout="fill" src={src} className="rounded-3xl" objectFit="cover" />
                  </div>
                  <div className="flex flex-col mt-8 items-start justify-start w-full">
                    <p className="w-full text-2xl font-bold leading-normal text-gray-600">{title}</p>
                    <p className="w-full text-lg leading-snug text-gray-500">{description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Layout>
    </ProtectedWrapper>
  )
}

export default InfoPage