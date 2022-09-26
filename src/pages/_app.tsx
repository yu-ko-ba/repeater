import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // ServiceWorkerの登録をする
    if ('serviceWorker' in navigator) {
      let scope = "/repeater/"
      if (process.env.NODE_ENV === "development") {
        scope = "/"
      }
      navigator.serviceWorker
        .register('sw.js', {scope: scope})
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
