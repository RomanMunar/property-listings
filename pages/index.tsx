import Image from "next/image"
import { PropertyGrid } from "../components/common/property"
import { Layout } from "../components/core"
import { API_URL } from "../lib/api"
import { Property } from "../@types"
import { InferGetStaticPropsType } from "next"

export async function getStaticProps() {
  const fetchProperties = async () =>
    (await fetch(`${API_URL}/properties?_limit=10`).then((res) => res.json())) as Property[]
  const properties = await fetchProperties()
  return {
    props: { properties },
  }
}

const Home = ({ properties }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="w-full font-serif min-h-page">
      <div className="relative">
        <div className="w-full h-52 md:min-h-page">
          <Image src="/homepace_image.jpg" layout="fill" />
        </div>
        <div className="absolute top-0 w-full h-full bg-gray-700 bg-opacity-50"></div>
        <div className="absolute z-10 w-full px-10 text-white md:text-center md:bottom-1/2 bottom-1/4">
          <span className="block text-3xl font-bold md:text-5xl text-amber-500">John Hitchkins</span>
          <span className="block ml-5 text-xl md:text-2xl">
            #1 in the Santa Barbara MLS for transactions with over $1 Billion in sales.
          </span>
        </div>
      </div>
      <div className="px-5 bg-gray-800 text-amber-500">
        <div>
          <div className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-0 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block text-gray-100">Ready for a modern estate?</span>
              <span className="block text-amber-500">Start your journey today.</span>
            </h2>
            <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-amber-600 hover:bg-amber-700"
                >
                  Visit Listings
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
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 md:p-5">
        <div className="grid max-w-6xl grid-cols-1 mx-auto md:h-screen md:grid-rows-12 md:grid-cols-12">
          <div className="relative col-span-8 col-start-3 row-span-6 row-start-2 overflow-hidden shadow-2xl rounded-xl">
            <div className="w-full h-full">
              <Image src="/team_collab.jpg" layout="fill" />
            </div>
            <div className="absolute inset-0 w-full h-full bg-gray-900 bg-opacity-50"></div>
            <div className="absolute z-10 w-full px-2 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h3 className="text-2xl font-semibold md:text-4xl text-amber-500">Unparalleled Service.</h3>
              <p className="text-gray-100 md:text-lg">Expert advice at every step of the Transcation.</p>
            </div>
          </div>
          <div className="relative col-span-3 col-start-1 row-span-3 row-start-4 overflow-hidden rounded-md shadow-2xl">
            <div className="w-full h-full">
              <Image src="/community.jpg" layout="fill" />
            </div>
            <div className="absolute top-0 w-full h-full bg-gray-900 bg-opacity-50"></div>
            <div className="absolute z-10 w-full px-2 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h3 className="text-2xl font-semibold text-amber-500">Loving Community.</h3>
              <p className="text-gray-100 ">Connect with kind hearted people.</p>
            </div>
          </div>
          <div className="relative col-span-3 col-start-9 row-span-3 row-start-1 overflow-hidden rounded-md shadow-2xl">
            <div className="w-full h-full">
              <Image src="/neighborhoods.jpg" layout="fill" />
            </div>
            <div className="absolute top-0 w-full h-full bg-gray-900 bg-opacity-50"></div>
            <div className="absolute z-10 w-full px-2 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h3 className="text-2xl font-semibold text-amber-500">Explore Neighborhoods.</h3>
              <p className="text-gray-100 ">
                Spectacular homes, a phenomenal climate, and a special community of people.
              </p>
            </div>
          </div>
          <div className="relative col-span-3 col-start-7 row-span-3 row-start-6 overflow-hidden rounded-md shadow-2xl">
            <div className="w-full h-full">
              <Image src="/conciergie.jpg" layout="fill" />
            </div>
            <div className="absolute top-0 w-full h-full bg-gray-900 bg-opacity-50"></div>
            <div className="absolute z-10 w-full px-2 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h3 className="text-2xl font-semibold text-amber-500">Visit Our Concierge Services.</h3>
              <p className="text-gray-100 ">Let our trusted partners help guide you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full py-10 bg-gray-900">
        <h3 className="block max-w-6xl px-10 mx-auto my-10 text-5xl font-semibold text-amber-500 sm:px-0 md:text-center">
          Our Properties.
        </h3>
        <PropertyGrid properties={properties} />
      </div>
    </div>
  )
}

Home.Layout = Layout
export default Home
