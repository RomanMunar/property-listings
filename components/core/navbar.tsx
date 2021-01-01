import React, { useState } from "react"
import { disableScroll, enableScroll } from "../../lib/utils"
import { Logo, Menu } from "../icons"

interface Props {}

const navbar = (props: Props) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  return (
    <>
      <nav className="sticky top-0 z-20 flex items-center justify-between px-3 py-2 font-serif bg-gray-800 border-b-2 md:px-10 md:p-5 border-amber-500">
        <div className="flex items-center">
          <Logo className="w-8 h-8 text-white md:w-10 md:h-10" />
          <span className="font-bold">
            <span className="text-2xl text-amber-500 text-md md:text-4xl">H</span>
            <span className="text-sm text-gray-200 md:text-2xl ">itchkins</span>
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center text-white md:text-xl">
            <li className="px-4 py-1 font-bold border-b-2 border-amber-500">Home</li>
            <li className="px-4 py-1 border-b-2 border-transparent">Listings</li>
            <li className="px-4 py-1 border-b-2 border-transparent">Testimonials</li>
            <li className="px-4 py-1 border-b-2 border-transparent text-amber-500">Contact Us</li>
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
