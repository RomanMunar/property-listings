import { Layout } from "../components"
import Image from "next/image"
const Home = () => {
  return (
    <div className="w-full font-serif min-h-page">
      <div className="relative">
        <div
          style={{ backgroundImage: 'url("/homepace_image.jpg")' }}
          className="bg-no-repeat bg-cover w-fullbg-center h-52"
        ></div>
        <div className="absolute top-0 w-full h-full bg-gray-700 bg-opacity-50"></div>
        <div className="absolute top-0 z-10 text-white">
          <span className="text-amber-400">John Hitchkins</span> is a Real Estate Partners is #1 in the Santa Barbara
          MLS for transactions with over $1 Billion in sales.
        </div>
      </div>
    </div>
  )
}
Home.Layout = Layout
export default Home
