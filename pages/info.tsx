import Head from "next/head";
import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import ProtectedWrapper from "../components/protectedWrapper";

export interface Infoprops {

}

const Info = (props: Infoprops) => {

  return (
    <ProtectedWrapper>
      <Layout>
        <Head>
          <title>Info protegida</title>
        </Head>
        <Container>
          <h1>Hola</h1>
        </Container>
      </Layout>
    </ProtectedWrapper>
  )
}

export default Info