import React, { ReactComponentElement, ReactElement } from "react";
import { initFirebase } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button } from "../components/button";
import { ReactComponentLike } from "prop-types";
import { ArrowRightAlt } from "@styled-icons/material"
import { useRouter } from "next/router";
const firebase = initFirebase()
export interface Menuprops {
  title: string
  Icon?: ReactComponentLike
}

export const Menu = (props: Menuprops) => {
  const { title, Icon } = props

  const router = useRouter()
  const [user, loading, error] = useAuthState(firebase.auth());

  const _logout = () => {
    firebase.auth().signOut();
    router.replace('/login')
  };
  return (
    <div className="w-full h-30 pt-16 px-4 pb-2 border-b-gray-300 border-b-2 flex">
      <div className="flex flex-1">
        {Icon && <div className="rounded flex items-center justify-start">
          <Icon className="w-6 h-6 mr-2" />
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        }
      </div>
      <Button
        onClick={_logout}
      >
        <>
          Salir
        <ArrowRightAlt className="w-6 h-6" />
        </>
      </Button>
    </div>
  )
}