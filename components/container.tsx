import { ReactNode, FunctionComponent, HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const Container: FunctionComponent = (props: ContainerProps) => {
  const { children, ...others } = props

  return <div className="container mx-auto flex-1" {...others}>{children}</div>
}

export default Container
