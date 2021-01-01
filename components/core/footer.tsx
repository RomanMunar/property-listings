import { Logo } from "../icons"

const footer = () => (
  <div className="font-serif text-gray-100 bg-gray-800 md:text-lg ">
    <div className="grid max-w-6xl px-4 pt-10 pb-10 mx-auto space-y-4 md:grid-cols-2 lg:grid-cols-4 md:place-items-center">
      <div className="flex flex-col text-center md:text-left">
        <div className="flex items-center mx-auto mb-1 md:mx-0 md:mb-4">
          <Logo className="w-10 h-10 text-white" />
          <span className="text-4xl font-bold">
            <span className="text-amber-500 ">H</span>
            <span className="text-lg text-gray-200">itchkins</span>
          </span>
        </div>
        <span>Crafted By Roman Munar</span>
        <span>roman.munar1@gmail.com</span>
        <span>&#169; Year 2021</span>
      </div>
      <div className="flex flex-col text-center md:text-left">
        <h4 className="mb-1 text-xl text-gray-500 md:mb-4 md:text-2xl">Contact Us</h4>
        <span>1255 Coast Village Road, Suite 102 B</span>
        <span>Santa Barbara, CA, 93108</span>
        <span>Johnhitchkins@gmail.com</span>
        <span>(805) 565-4000</span>
      </div>
      <div className="flex flex-col text-center md:text-left">
        <h4 className="mb-1 text-xl text-gray-500 md:mb-4 md:text-2xl">Search Properties</h4>
        <span>Home for sale in Mexico</span>
        <span>Home for sale in Philippines</span>
        <span>Home for sale in Santa Barbara</span>
        <span>Home for sale in Makati</span>
      </div>
      <div className="flex flex-col text-center md:text-left">
        <h4 className="mb-1 text-xl text-gray-500 md:mb-4 md:text-2xl">Hitchkins Partners</h4>
        <span>Michael Hamilton</span>
        <span>Nancy Calcagno</span>
        <span>Erick Kevin Lee</span>
        <span>Roman Emmanuel Munar</span>
      </div>
    </div>
  </div>
)

export default footer
