import NextLink from "next/link"
import clsx from "clsx"
interface Props {
  dest: string
  route: string
  active: boolean
}

const navItem = ({ route, dest, active }: Props) => {
  return (
    <li>
      <NextLink href={dest}>
        <a className={clsx("px-2 py-1", active && "font-bold")}>{route}</a>
      </NextLink>
      <div className={clsx("w-10/12 mx-auto border border-transparent", active && "border-amber-500")}></div>
    </li>
  )
}

export default navItem
