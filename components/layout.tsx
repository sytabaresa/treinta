import Footer from './footer'
import Meta from './meta'

type Props = {
  fullScreen?: boolean
  children: React.ReactNode
  footer?: boolean
}

const Layout = ({ fullScreen = false, footer, children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <main className={`${fullScreen && "min-h-screen"} flex flex-col`}>{children}</main>
      </div>
      {footer && <Footer />}
    </>
  )
}

export default Layout
