import Head from 'next/head'
import { APP_NAME, APP_DESCRIPTION } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <meta name='application-name' content={APP_NAME} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content={APP_NAME} />
      <meta name='description' content={APP_DESCRIPTION} />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='theme-color' content='#FFFFFF' />
      {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
      {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

      <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='shortcut icon' href='/favicons/favicon.ico' />
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  )
}