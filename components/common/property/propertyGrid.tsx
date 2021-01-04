import { useEffect, useState } from "react"
import { PropertyCard, PropertyPreview } from "."
import { Property } from "../../../@types"
import { disableScroll, enableScroll, useMedia } from "../../../lib/utils"
import { Pagination } from "../../core"

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
        <div className="max-w-lg mx-auto overflow-auto border-t border-l-0 md:border-l max-h-90vh">
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
            <div className="border-b">
              <Pagination propertiesLength={properties.length} handlePagination={handlePagination} />
            </div>
            {properties.slice(pageNumber === 1 ? 0 : pageNumber * offset - offset, pageNumber * offset).map((p) => (
              <PropertyCard
                key={`product-${p.id}`}
                onPropertyClick={onPropertyClick}
                selected={selected?.id === p.id}
                property={p}
              />
            ))}
            <Pagination propertiesLength={properties.length} handlePagination={handlePagination} />
          </div>
        </div>
        <div className="hidden w-full px-10 overflow-auto text-white bg-gray-800 border py-7 border-amber-500 lg:block max-h-90vh">
          {selected && !isMobile && <PropertyPreview selected={selected} />}
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
        <div className="fixed bottom-0 z-50 w-full overflow-hidden overflow-y-scroll bg-gray-800 rounded-3xl h-3/4 ">
          <PropertyPreview selected={selected} />
        </div>
      )}
    </>
  )
}

export default propertyGrid
