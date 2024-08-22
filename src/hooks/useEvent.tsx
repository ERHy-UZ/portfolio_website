//Custom hook para el context

import { useContext } from "react"
import { EventContext } from "@/context/EventContext"

export const useEvent = () => {

    const context = useContext(EventContext)

    return context
}