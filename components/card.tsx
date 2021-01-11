import React, { ReactChild, ReactChildren } from "react";

export interface Cardprops {
  title: string
  children: ReactChild | ReactChildren;
  src: string
}

export const Card = (props: Cardprops) => {

  const { title, children, src } = props

  return (
    <div className="inline-flex flex-col items-start justify-start shadow">
      <div className="flex flex-col space-y-4 items-end justify-start p-4 w-full bg-white border rounded-lg border-gray-200">
        <img className="w-full h-40 bg-gray-100 rounded-lg" src={src} />
        <div className="flex flex-col space-y-1 items-start justify-start w-full">
          <p className="w-full text-base font-bold leading-normal text-gray-600">{title}</p>
          <p className="w-full text-base leading-snug text-gray-500">{children}</p>
        </div>
      </div>
    </div>
  )
}