import Head from "next/head";
import React, { useCallback, useState } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import { Menu } from "../components/menu";
import ProtectedWrapper from "../components/protectedWrapper";
import { GpsFixed } from "@styled-icons/material"
import { Map } from '../components/maps'

const pageTitle = 'Lugares de Interés'

export interface MapPageprops {

}

const MapPage = (props: MapPageprops) => {

  return (
    <ProtectedWrapper>
      <Layout footer>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Menu
          title={pageTitle}
          Icon={GpsFixed}
        />
        <Container>
          <div className="pt-12 mx-4 relative">
            <img
              src="/assets/lines1.svg"
              alt="lines"
              className="overflow-img absolute -z-10 lg:hidden"
              style={{ width: '500vw', right: '-15px', top: '-130px' }}
            />
            <h1 className="text-6xl font-bold ml-4 mb-4">Empresas:</h1>
            <Map />
          </div>
        </Container>
      </Layout>
    </ProtectedWrapper>
  )
}

export default MapPage