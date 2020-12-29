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
      <div className="px-5 bg-gray-800 text-amber-500">
        <div>
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block text-gray-100">Ready to dive in?</span>
              <span className="block text-amber-500">Start your free trial today.</span>
            </h2>
            <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-amber-600 hover:bg-amber-700"
                >
                  Get started
                </a>
              </div>
              <div className="inline-flex ml-3 rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium bg-white border border-transparent rounded-md text-amber-500 hover:bg-amber-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Home.Layout = Layout
export default Home
