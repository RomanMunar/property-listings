import { Layout } from "../components"
const Home = () => {
  return (
    <div className="w-full font-serif min-h-page">
      <div className="relative">
        <div
          style={{ backgroundImage: 'url("/homepace_image.jpg")' }}
          className="w-full bg-center bg-no-repeat bg-cover h-52"
        ></div>
        <div className="absolute top-0 w-full h-full bg-gray-700 bg-opacity-50"></div>
        <div className="absolute z-10 px-10 text-white top-1/4">
          <span className="block text-3xl font-bold text-amber-500">John Hitchkins</span>
          <span className="block ml-5 text-xl">
            #1 in the Santa Barbara MLS for transactions with over $1 Billion in sales.
          </span>
        </div>
      </div>
    </div>
  )
}
Home.Layout = Layout
export default Home
