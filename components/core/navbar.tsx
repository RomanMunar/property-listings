import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import { NavItem } from "."
import { disableScroll, enableScroll } from "../../lib/utils"
import { LogoFull } from "../common"
import { Menu } from "../icons"

const navbarRoutes = [
  { route: "Home", dest: "/" },
  { route: "Listings", dest: "/listings" },
  { route: "Testimonials", dest: "/testimonials" },
  { route: "Contact", dest: "/contact" },
]

const navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const { asPath } = useRouter()
  return (
    <>
      <nav className="z-20 flex items-center justify-between px-3 py-2 font-serif bg-gray-800 border-b-2 md:px-10 md:py-4 border-amber-500">
        <LogoFull size="sm" />
        <div className="hidden md:block">
          <ul className="flex items-center space-x-4 text-white divide-x divide-gray-700 md:text-xl">
            {navbarRoutes.map((n) => (
              <NavItem active={asPath === n.dest} key={`route-${n.route}`} route={n.route} dest={n.dest} />
            ))}
          </ul>
        </div>
        <div className="inline-flex h-full sm:hidden">
          <button
            onClick={() => {
              setIsOverlayOpen(true)
              disableScroll()
            }}
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>
      {isOverlayOpen && (
        <>
          <button
            onClick={() => {
              setIsOverlayOpen(false)
              enableScroll()
            }}
            className="fixed inset-0 z-40 w-full h-full bg-gray-800 bg-opacity-30 sm:block"
          />
          <nav className="fixed bottom-0 z-50 w-full duration-300 transform h-1/2">
            <ul className="flex flex-col items-center justify-around w-full h-full py-10 space-y-4 text-white bg-gray-700 rounded-tl-2xl rounded-tr-2xl top-1/2">
              <li className="px-4 py-1 font-bold border-transparentborder-b-2 border-amber-500">Home</li>
              <li className="px-4 py-1 border-b-2 border-transparent">Listings</li>
              <li className="px-4 py-1 border-b-2 border-transparent">Testimonials</li>
              <li className="px-4 py-1 border-b-2 border-transparent">Contact</li>
            </ul>
          </nav>
        </>
      )}
    </>
  )
}

export default navbar
