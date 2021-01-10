import React, { HTMLAttributes, ReactChild, ReactChildren } from "react"

export interface Buttonprops extends HTMLAttributes<HTMLButtonElement> {
  children: ReactChild | ReactChildren;
}

export const Button = (props: Buttonprops) => {
  const { children, className, ...other } = props

  return (
    <button className={"flex items-center justify-center bg-principal rounded-lg py-2 px-4 " + className} {...other}>
      <div className="flex space-x-2 items-center justify-start h-full text-sm font-bold text-center text-gray-700" >
        {children}
      </div>
    </button>
  )
}