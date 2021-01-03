import clsx from "clsx"
import { Logo } from "../icons"

interface Props {
  size: "sm" | "md" | "lg"
}

const logoFull = ({ size }: Props) => {
  return (
    <div className="flex items-center">
      <Logo
        className={clsx(
          "w-8 h-8 text-white",
          [size === "sm" && "w-6 h-6 md:w-8 md:h-8"],
          [size === "md" && "w-8 h-8 md:w-10 md:h-10"],
          [size === "lg" && "w-10 h-10 md:w-12 md:h-12"]
        )}
      />
      <span className="font-bold">
        <span
          className={clsx(
            "text-amber-500",
            [size === "sm" && "text-2xl md:text-4xl"],
            [size === "md" && "text-4xl md:text-5xl"],
            [size === "lg" && "text-6xl md:text-7xl"]
          )}
        >
          H
        </span>
        <span
          className={clsx(
            "text-sm text-gray-200 md:text-2xl",
            [size === "sm" && "text-sm md:text-2xl"],
            [size === "md" && "text-lg md:text-3xl"],
            [size === "lg" && "text-3xl md:text-4xl"]
          )}
        >
          itchkins
        </span>
      </span>
    </div>
  )
}

export default logoFull
