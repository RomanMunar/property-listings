import Image from "next/image"
import { PropertyGrid } from "../components/common/property"
import { Layout } from "../components/core"
import { API_URL } from "../lib/api"
import { Property } from "../@types"
import { InferGetStaticPropsType } from "next"

export async function getStaticProps() {
  const fetchProperties = async () =>
    (await fetch(`${API_URL}/properties?_limit=42`).then((res) => res.json())) as Property[]
  const properties = await fetchProperties()
  return {
    props: { properties },
  }
}

const Home = ({ properties }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="w-full font-serif">
      <div className="relative h-96 md:min-h-page">
        <div className="w-full h-96 md:min-h-page">
          <Image quality={50} loading="eager" src="/skyscraper-gold.jpg" layout="fill" />
        </div>
        <div className="absolute top-0 w-full h-full bg-gray-900 bg-opacity-60"></div>
        <div className="absolute z-10 w-full px-10 text-center transform -translate-x-1/2 -translate-y-1/2 h-80 top-1/2 left-1/2">
          <span className="block text-5xl font-bold text-gray-200 md:text-6xl">
            Helping you <span className="text-amber-500">find a home that you love.</span>
          </span>
          <span className="block ml-5 text-2xl text-gray-300 md:text-2xl">
            #1 in the Santa Barbara MLS for transactions with over $1 Billion in sales.
          </span>
        </div>
      </div>
      <div className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 md:p-5">
        <div className="grid max-w-6xl grid-cols-1 mx-auto md:h-screen md:grid-rows-12 md:grid-cols-12">
          <div className="relative h-64 overflow-hidden shadow-2xl md:h-auto md:col-span-8 md:col-start-3 md:row-span-6 md:row-start-2 md:rounded-2xl">
            <div className="w-full h-full">
              <Image loading="eager" src="/team_collab.jpg" layout="fill" />
            </div>
            <div className="absolute inset-0 w-full h-full bg-gray-900 bg-opacity-50"></div>
            <div className="absolute z-10 w-full px-2 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h3 className="text-2xl font-semibold md:text-4xl text-amber-500">Unparalleled Service.</h3>
              <p className="text-gray-100 md:text-lg">Expert advice at every step of the Transcation.</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden shadow-2xl md:h-auto md:col-span-3 md:col-start-1 md:row-span-3 md:row-start-4 md:rounded-xl">
            <div className="w-full h-full">
              <Image quality={50} src="/community.jpg" layout="fill" />
            </div>
            <div className="absolute top-0 w-full h-full bg-gray-800 bg-opacity-50"></div>
            <div className="absolute z-10 w-full px-2 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h3 className="text-2xl font-semibold text-amber-500">Loving Community.</h3>
              <p className="text-gray-100 ">Connect with kind hearted people.</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden shadow-2xl md:h-auto md:col-span-3 md:col-start-9 md:row-span-3 md:row-start-1 md:rounded-xl">
            <div className="w-full h-full">
              <Image quality={50} loading="eager" src="/neighborhoods.jpg" layout="fill" />
            </div>
            <div className="absolute top-0 w-full h-full bg-gray-800 bg-opacity-50"></div>
            <div className="absolute z-10 w-full px-2 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h3 className="text-2xl font-semibold text-amber-500">Explore Neighborhoods.</h3>
              <p className="text-gray-100 ">
                Spectacular homes, a phenomenal climate, and a special community of people.
              </p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden shadow-2xl md:h-auto md:col-span-3 md:col-start-7 md:row-span-3 md:row-start-6 md:rounded-xl">
            <div className="w-full h-full">
              <Image quality={50} loading="eager" src="/conciergie.jpg" layout="fill" />
            </div>
            <div className="absolute top-0 w-full h-full bg-gray-800 bg-opacity-50"></div>
            <div className="absolute z-10 w-full px-2 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h3 className="text-2xl font-semibold text-amber-500">Visit Our Concierge Services.</h3>
              <p className="text-gray-100 ">Let our trusted partners help guide you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div
          style={{
            background:
              "linear-gradient(90deg, #292524 21px, transparent 1%) center, linear-gradient(#292524 21px, transparent 1%) center, #a799cc",
            backgroundSize: "22px 22px",
          }}
          className="flex flex-col items-center w-full px-6 py-32 mx-auto space-y-5"
        >
          <div className="w-48 -mt-10">
            <Image width="250px" height="100px" src="/ripe-logo-1-min.jpg" />
          </div>
          <div className="max-w-xl">
            <blockquote className="relative px-5 ">
              <svg className="absolute left-0 w-8 h-8 text-gray-600 -top-2" viewBox="0 0 48 48">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.8533 9.11597C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95555 20.2848 9.30112C19.8445 8.72886 19.4227 8.75027 18.8533 9.11597Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.6789 9.11597C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95555 40.1105 9.30112C39.6702 8.72886 39.2484 8.75027 38.6789 9.11597Z"
                  fill="currentColor"
                />
              </svg>
              <p className="relative z-10 text-xl font-bold text-gray-200">
                <span className="ml-4 text-4xl text-amber-500">E</span>very step of the way we’ve been supported. We
                know whenever we need help, guidance, support or advice, the Hitchkins guys are only a phone call away.
              </p>
            </blockquote>
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex flex-col items-center md:flex-row md:space-x-2">
              <span className="text-xl font-bold text-gray-300">Keith Hollaway</span>
              <span className="hidden text-xl text-gray-400 md:block">/</span>
              <span className="text-gray-300 ">CEO, Ripe Thinkster</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full pt-10 pb-40 bg-gray-900">
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
