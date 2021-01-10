import Head from "next/head";
import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import { Menu } from "../components/menu";
import ProtectedWrapper from "../components/protectedWrapper";
import { Info } from '@styled-icons/material'
const pageTitle = 'Información'
export interface Infoprops {

}

const InfoPage = (props: Infoprops) => {

  return (
    <ProtectedWrapper>
      <Layout>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Menu
          title={pageTitle}
          Icon={Info}
        />
        <Container>
          <h1>Hola</h1>
        </Container>
      </Layout>
    </ProtectedWrapper>
  )
}

export default InfoPage