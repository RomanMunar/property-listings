import React, { useState } from "react"
import { Logo, Menu } from "../icons"

interface Props {}

const Navbar = (props: Props) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between px-3 py-2 bg-gray-800">
      <div className="flex items-center">
        <Logo className="w-8 h-8 text-white" />
        <span className="text-2xl font-bold">
          <span className="text-amber-500 text-md">H</span>
          <span className="text-sm text-gray-200">itchkins</span>
        </span>
      </div>
      <div className="h-full sm:hidden">
        {isOverlayOpen && (
          <button
            onClick={() => setIsOverlayOpen(false)}
            className="absolute inset-0 z-40 w-full h-full bg-gray-500 bg-opacity-30 sm:block"
          >
            <div className="relative w-full h-1/2">
              <ul className="absolute flex flex-col items-center justify-around w-full h-full py-10 space-y-4 text-white bg-gray-700 rounded-tl-2xl rounded-tr-2xl top-1/2">
                <li className="px-4 py-1 font-bold border-b-2 border-amber-500">Home</li>
                <li>Listings</li>
                <li className="px-4 py-1">Testimonials</li>
                <li className="px-4 py-1">Contact</li>
              </ul>
            </div>
          </button>
        )}
        <button onClick={() => setIsOverlayOpen(true)}>
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
