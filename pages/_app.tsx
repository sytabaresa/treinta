import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import '../styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}
