import { ReactNode, FunctionComponent, HTMLAttributes } from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const Container = (props: ContainerProps) => {
  const { children, className, ...others } = props

  return <div className={"container mx-auto flex-1 " + className} {...others}>{children}</div>
}

export default Container
