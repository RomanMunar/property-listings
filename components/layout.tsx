import React, { ReactNode } from "react"
import { Navbar } from "./core"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="min-h-page">{children}</main>
    </>
  )
}

export default Layout
