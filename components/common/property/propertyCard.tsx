import clsx from "clsx"
import { Property } from "../../../@types"
import { Bed, Car, Check, Leaf, Paw, Shower } from "../../icons"

interface Props {
  property: Property
  selected: boolean
  onPropertyClick: (property: Property) => void
}

const propertyCard = ({ property, onPropertyClick, selected }: Props) => {
  return (
    <button
      onClick={() => onPropertyClick(property)}
      className="flex flex-col items-start text-left border-b cursor-pointer focus:outline-none"
    >
      <div
        className={clsx(
          "flex flex-col items-start px-6 py-5 text-left border-l-4 border-transparent",
          selected && "border-amber-500 bg-gray-800"
        )}
      >
        <h3 className="text-lg font-semibold text-gray-100">{property.title}</h3>
        <p className="text-xs text-gray-100">{property.location}</p>
        <div className="space-x-2 text-gray-200">
          <span>
            {property.bathrooms_count} <Shower className="inline w-4 h-4" />
          </span>
          <span>
            • {property.bedrooms_count} <Bed className="inline w-4 h-4" />
          </span>
          <span>
            • {property.garages_count} <Car className="inline w-4 h-4" />
          </span>
          {property.has_garden && (
            <span>
              • <Check className="inline w-3 h-3 -mr-1" />
              <Leaf className="inline w-4 h-4 transform -rotate-3" />
            </span>
          )}
          {property.pets_allowed && (
            <span>
              • <Check className="inline w-3 h-3 transform -rotate-3" />
              <Paw className="inline w-4 h-4" />
            </span>
          )}
        </div>
        <p
          style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
          className="overflow-hidden text-sm text-gray-100 break-all"
        >
          {property.description}
        </p>
      </div>
    </button>
  )
}

export default propertyCard
