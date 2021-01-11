import React, { ReactComponentElement, ReactElement } from "react";
import { initFirebase } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button } from "../components/button";
import { ReactComponentLike } from "prop-types";
import { ArrowRightAlt } from "@styled-icons/material"
import { useRouter } from "next/router";
import Link from "next/link";
const firebase = initFirebase()
export interface Menuprops {
  title: string
  Icon?: ReactComponentLike
}

export const Menu = (props: Menuprops) => {
  const { title, Icon } = props

  const router = useRouter()
  const [user, loading, error] = useAuthState(firebase.auth());

  const _logout = async () => {
    router.replace('/login')
    await firebase.auth().signOut();
  };

  const places = [
    {
      title: 'Mapas',
      href: '/map',
    },
    {
      title: 'Info',
      href: '/info'
    }
  ]
  // console.log(router.pathname)

  return (
    <div className="w-full h-30 pt-16 px-4 pb-2 border-b-gray-300 border-b-2 flex relative">
      <div className="bg-principal h-10 pr-10 absolute top-0 left-0 rounded-br-full flex items-center">
        {places.map((item, index) =>
          <Link key={index} href={item.href} passHref>
            <a className={`font-bold mx-2 hover:text-white ${router.pathname == item.href && 'underline'}`}>{item.title}</a>
          </Link>
        )}
      </div>
      <img className="w-24 absolute top-0 right-3" src="/assets/logo.png" />
      <div className="flex flex-1">
        {Icon && <div className="rounded flex items-center justify-start">
          <Icon className="w-6 h-6 mr-2" />
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        }
      </div>
      <Button
        className="absolute right-0 bottom-0 rounded-none rounded-l-full"
        onClick={_logout}
      >
        <>
          Logout
        <ArrowRightAlt className="w-6 h-6" />
        </>
      </Button>
    </div>
  )
}