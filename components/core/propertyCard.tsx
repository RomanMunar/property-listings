import React from "react"
import { Property } from "../../@types"
import clsx from "clsx"

interface Props {
  property: Property
  selected: boolean
  onPropertyClick: (property: Property) => void
}

const propertyCard = ({ property, onPropertyClick, selected }: Props) => {
  return (
    <button onClick={() => onPropertyClick(property)} className="cursor-pointer focus:outline-none">
      <div
        className={clsx(
          "flex flex-col border-t text-left items-start px-5 py-3 ",
          selected && "border-amber-500  border-b bg-gray-700"
        )}
      >
        <h3 className="text-lg font-semibold text-gray-100">{property.title}</h3>
        <p className="text-xs text-gray-100">{property.location}</p>
        <div>
          <span className="text-sm font-semibold tracking-wide text-gray-100 track">{property.bathrooms_count} •</span>
          <span className="p-2 text-sm font-bold text-gray-100"> {property.bedrooms_count} • </span>
          <span className="px-2 py-1 text-xs bg-gray-200 rounded-full">{property.garages_count}</span>
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
