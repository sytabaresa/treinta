import React, { ReactChild, ReactChildren } from "react"

export interface Buttonprops {
  children: ReactChild | ReactChildren;
}

export const Button = (props: Buttonprops) => {
  const { children, ...other } = props

  return (
    <button className="flex items-center justify-center py-2 px-28 w-full h-full bg-principal rounded-lg" {...other}>
      <div className="flex space-x-2 items-center justify-start h-full text-sm font-bold text-center text-gray-700" >
        {children}
      </div>
    </button>
  )
}