import { useEffect, useState } from "react"
import { isClient } from "."

/* snippet from
  https:streamich.github.io/react-use/?path=/story/sensors-usemedia--docs
 */
const useMedia = (query: string, defaultState: boolean = false) => {
  const [state, setState] = useState(isClient ? () => window.matchMedia(query).matches : defaultState)

  useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(query)
    const onChange = () => {
      if (!mounted) {
        return
      }
      setState(!!mql.matches)
    }

    mql.addListener(onChange)
    setState(mql.matches)

    return () => {
      mounted = false
      mql.removeListener(onChange)
    }
  }, [query])

  return state
}

export default useMedia
