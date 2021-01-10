import { ReactElement } from "react"
import { InputHTMLAttributes } from "react"

export interface Inputprops extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  icon?: ReactElement
}

export const Input = (props: Inputprops) => {

  const { label, icon, ...other } = props

  return (
    <div className="flex flex-col items-start justify-start w-64">
      {label && <p className="w-full h-6 text-sm font-semibold leading-tight text-gray-500">{label}</p>}
      <div className="inline-flex space-x-2 items-center justify-end p-2 w-full h-10 bg-white border rounded-lg border-gray-200">
        <input className="w-52 text-base leading-snug text-gray-900" {...other}></input>
        <div className="w-6 h-full rounded flex items-center justify-start">
          {icon}
        </div>
      </div>
    </div>
  )
}