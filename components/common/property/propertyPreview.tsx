import { PropertySlider } from "."
import { Property } from "../../../@types"
import { Shower, Leaf, Car, Bed, Paw } from "../../icons"

interface Props {
  selected: Property
}

const propertyPreview = ({ selected }: Props) => {
  return (
    <div className="text-white">
      <div className="md:my-2">
        <PropertySlider images={["1", "2", "3", "4", "5"]} />
      </div>
      <div className="p-4 space-y-5 md:p-0">
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
          <div className="flex flex-col ml-4 md:flex-row">
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
            <div className="flex items-start mt-5 space-x-2 md:mt-0">
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
                <Leaf className="inline w-4 h-4 mr-3 transform -rotate-3" />
                Has garden
              </span>
            )}
            {selected.pets_allowed && (
              <span>
                <Paw className="inline w-4 h-4 mr-3" /> Pets allowed
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default propertyPreview
