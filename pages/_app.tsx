import "tailwindcss/tailwind.css"
import { AppProps } from "next/app"
import { ReactNode } from "react"

const Noop: ReactNode = ({ children }: { children: ReactNode }) => <>{children}</>
function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
