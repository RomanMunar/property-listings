import React, { ReactNode } from "react"
import { Footer, Navbar } from "."

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="min-h-page">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
