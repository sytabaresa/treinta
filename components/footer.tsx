import { HTMLAttributes } from 'react'
import Container from './container'

export interface FooterProps extends HTMLAttributes<HTMLElement> {
}

const Footer = (props: FooterProps) => {
  return (
    <footer {...props}>

        <div className="pt-10 pb-2 flex flex-col lg:flex-row items-center justify-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4 lg:w-1/2">
            Treinta
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/sytabaresa/treinta`}
              className="mx-3 font-bold hover:underline"
            >
              Ver en GitHub
            </a>
          </div>
        </div>
        <img className="w-full h-36" src="/assets/wave1.svg" alt="" />
    </footer>
  )
}

export default Footer
