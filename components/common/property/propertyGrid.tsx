import { useEffect, useState } from "react"
import { PropertyCard, PropertySlider } from "."
import { Property } from "../../../@types"
import { disableScroll, enableScroll, useMedia } from "../../../lib/utils"
import { Bed, Car, Leaf, Paw, Shower } from "../../icons"

interface Props {
  properties: Property[]
}

const offset = 7
const propertyGrid = ({ properties }: Props) => {
  const [selected, setSelected] = useState<Property | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const isMobile = useMedia("(max-width: 768px)")
  const handlePagination = (action: "increment" | "decrement" | "to", toPage?: number) => {
    if (action === "increment") {
      !(pageNumber === Number((properties.length / 7).toFixed())) && setPageNumber((p) => p + 1)
    }
    if (action === "decrement") {
      !(pageNumber === 1) && setPageNumber((p) => p - 1)
    }
    if (action === "to") {
      if (toPage) {
        setPageNumber(toPage)
      } else {
        console.error("toPage parameter is required for the action to")
      }
    }
  }
  const onPropertyClick = (property: Property) => {
    setSelected(property)
    setIsDrawerOpen(true)
    if (isMobile) disableScroll()
  }
  useEffect(() => {
    if (!isMobile) {
      setSelected(properties[0])
      setIsDrawerOpen(true)
    }
  }, [properties])

  return (
    <>
      <div className="flex w-full max-w-6xl mx-auto bg-gray-900">
        <div className="max-w-lg mx-auto overflow-auto border-t border-l lg:borderR-0 max-h-90vh">
          <div className="flex flex-col my-2">
            <h3 className="mx-4 font-thin text-white">Search results for "Properties near St. Peter"</h3>
            <div className="relative w-11/12 mx-auto mr-4">
              <input
                type="text"
                className="w-full px-2 py-1 mt-2 border rounded-sm focus:outline-none focus:ring-2 ring-green-700 ring-opacity-40"
              />
              <svg
                className="absolute w-5 h-5 opacity-75 top-4 right-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex flex-row items-center self-end mx-4 mt-2 space-x-2">
              <span className="inline-flex px-2 text-xs font-bold bg-gray-700 rounded-full text-amber-500">
                25 Listed Properties
              </span>
            </div>
          </div>
          <div className="border-t border-b">
            {properties.slice(pageNumber === 1 ? 0 : pageNumber * offset - offset, pageNumber * offset).map((p) => (
              <PropertyCard
                key={`product-${p.id}`}
                onPropertyClick={onPropertyClick}
                selected={selected?.id === p.id}
                property={p}
              />
            ))}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-900 sm:px-6">
              <div className="flex justify-between flex-1 sm:hidden">
                <button
                  onClick={() => handlePagination("decrement")}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-300 rounded-md hover:text-gray-500"
                >
                  Previous
                </button>
                <button
                  onClick={() => handlePagination("increment")}
                  className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-300 border border-gray-300 rounded-md hover:text-gray-500"
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="mx-auto">
                  <nav className="relative z-0 inline-flex mx-auto -space-x-px bg-gray-900" aria-label="Pagination">
                    <button
                      onClick={() => handlePagination("decrement")}
                      className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-200 border border-gray-300 rounded-l-md hover:bg-gray-700"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {Array(Number((properties.length / 7).toFixed()))
                      .fill(0)
                      .map((_, idx) => (
                        <button
                          key={`${idx + 1}-pageNumber`}
                          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-200 border border-gray-300 hover:bg-gray-700"
                          onClick={() => handlePagination("to", idx + 1)}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    <button
                      onClick={() => handlePagination("increment")}
                      className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-200 border border-gray-300 rounded-r-md hover:bg-gray-700"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-full p-5 overflow-auto text-white bg-gray-800 border border-amber-500 lg:block max-h-90vh">
          {selected && (
            <div className="px-4 py-2 space-y-5">
              <div className="my-2">
                <PropertySlider images={["1", "2", "3", "4", "5"]} />
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="text-2xl font-bold text-amber-500">
                  <span className="mr-1 text-xl">₱</span>
                  {Number(selected.price).toLocaleString()}
                </h3>
                <h3 className="text-xl font-bold text-gray-200">{selected.title}</h3>
                <h3 className="font-bold text-amber-500">{selected.location}</h3>
              </div>
              <div className="p-4 space-y-5 border rounded-lg">
                <h3 className="text-lg">Property Description</h3>
                <p className="ml-4 text-sm">{selected.description} </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg">Property Overview</h3>
                <div className="flex ml-4">
                  <ul>
                    <li>
                      <span className="mr-5 text-gray-300">Floor Area</span>
                      <span className="text-sm font-bold text-gray-50">{selected.floor_area}sqm</span>
                    </li>

                    <li>
                      <span className="mr-5 text-gray-300">Lot Area</span>
                      <span className="text-sm font-bold text-gray-50">{selected.lot_area}sqm</span>
                    </li>

                    <li>
                      <span className="mr-5 text-gray-300">Street Address</span>
                      <span className="text-sm font-bold text-gray-50">{selected.location}</span>
                    </li>
                  </ul>
                  <div className="flex items-start space-x-2">
                    <img
                      className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-100">{selected.owner_name}</span>
                      <span className="text-xs text-gray-300">{selected.owner_email}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg">Features</h3>
                <div className="grid grid-cols-2 gap-2 ml-4 ">
                  <span>
                    <Shower className="inline w-4 h-4" /> {selected.bathrooms_count} Bathrooms
                  </span>
                  <span>
                    <Bed className="inline w-4 h-4" /> {selected.bedrooms_count} Bedrooms
                  </span>
                  <span>
                    <Car className="inline w-4 h-4" /> {selected.garages_count} Garages
                  </span>
                  {selected.has_garden && (
                    <span>
                      <Leaf className="inline w-4 h-4 transform -rotate-3" /> Garden
                    </span>
                  )}
                  {selected.pets_allowed && (
                    <span>
                      <Paw className="inline w-4 h-4" /> Pets
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isDrawerOpen && isMobile && (
        <button
          onClick={() => {
            setIsDrawerOpen(false)
            setSelected(null)
            enableScroll()
          }}
          className="fixed bottom-0 z-40 w-full h-full bg-gray-900 bg-opacity-70 sm:block"
        />
      )}
      {selected && isMobile && (
        <div className="fixed bottom-0 z-50 w-full p-2 overflow-y-scroll h-3/4 ">
          <div className="max-w-xl mx-auto overflow-hidden bg-gray-800 rounded-3xl">
            <PropertySlider images={["1", "2", "3", "4", "5"]} />
            <div className="px-4">
              <h3 className="mb-4 text-2xl font-bold text-amber-500">{selected.title}</h3>
              <div className="p-4 space-y-5 text-gray-300 border rounded-lg">
                <h3 className="text-xl font-bold">Property Description</h3>
                <p className="text-sm">{selected.description} </p>
              </div>
              <div className="p-4 space-y-5 text-gray-300 border rounded-lg">
                <h3 className="text-xl font-bold">Property Description</h3>
                <p className="text-sm">{selected.description} </p>
              </div>
              <div className="p-4 space-y-5 text-gray-300 border rounded-lg">
                <h3 className="text-xl font-bold">Property Description</h3>
                <p className="text-sm">{selected.description} </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default propertyGrid
