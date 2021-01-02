import { disableScroll, enableScroll, useMedia } from "../../../lib/utils"
import { useState, useEffect } from "react"
import { PropertySlider, PropertyCard } from "."
import { Property } from "../../../@types"
import { Car, Shower, Bed, Leaf, Paw } from "../../icons"

interface Props {
  properties: Property[]
}

const propertyGrid = ({ properties }: Props) => {
  const [selected, setSelected] = useState<Property | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const isMobile = useMedia("(max-width: 768px)")
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
      <div className="flex w-full max-w-6xl mx-auto">
        <div className="max-w-lg mx-auto overflow-auto border-t border-l lg:border-r-0 max-h-90vh">
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
          <div className="border-t">
            {properties.map((p) => (
              <PropertyCard onPropertyClick={onPropertyClick} selected={selected?.id === p.id} property={p} />
            ))}
          </div>
        </div>
        <div className="hidden w-full p-5 overflow-auto text-white bg-gray-800 border border-amber-500 lg:block max-h-90vh">
          {selected && (
            <div className="px-4 py-2">
              <div className="my-2">
                <PropertySlider images={["1", "2", "3", "4", "5"]} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-amber-500">{selected.title}</h3>
              <div className="p-4 space-y-5 border rounded-lg">
                <h3 className="text-xl font-bold">Property Description</h3>
                <p className="text-sm">{selected.description} </p>
              </div>
              <br />
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg">Property Preview</h3>
                <ul>
                  <li>
                    <span className="text-sm ">• {selected.floor_area}sqm floor area</span>
                  </li>

                  <li>
                    <span className="text-sm ">• {selected.lot_area}sqm lot area</span>
                  </li>

                  <li>
                    <span className="text-sm ">• {selected.location}</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-2 p-4 border rounded-lg">
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
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg ">Benefits</h3>
                <div>
                  <span className="text-sm ">
                    • On top of being a really cool company and a great place to work, you’ll get the following benefits
                    as part of the Filta Family
                  </span>
                </div>
                <ul>
                  <li>
                    <span className="text-sm ">• 6:00am to 3:00pm Monday to Friday shift</span>
                  </li>
                  <br />

                  <li>
                    <span className="text-sm ">• HMO for yourself and one dependent within the first month</span>
                  </li>
                  <li>
                    <span className="text-sm ">
                      • 20 combined SL/VLs per year accrued from day one (you will have 10 accrued once you pass
                      regularisation)
                    </span>
                  </li>
                  <li>
                    <span className="text-sm ">
                      • 30 minutes early out Fridays (after regularisation, upon completing all your tasks for the week,
                      and if you’re on time during the week)
                    </span>
                  </li>

                  <li>
                    <span className="text-sm ">
                      • Company perks relating to your role such as free tickets to meetups, conventions, conferences,
                      etc.
                    </span>
                  </li>
                  <li>
                    <span className="text-sm ">• The opportunity to be a part of&nbsp;</span>
                    <span className="font">Shopify Meetup Manila</span>
                    <span className="font">
                      &nbsp;run by Filta every quarter.&nbsp; This event will expose you to the Shopify – the world's
                      fastest growing eCommerce platform – and the ecosystem in Manila.
                    </span>
                  </li>
                </ul>
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
