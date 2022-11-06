import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
      <Provider   >
        <Component {...pageProps} />
      </Provider>
     
    </SessionProvider>
  )
}

export default MyApp
