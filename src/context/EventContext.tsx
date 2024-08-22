'use client'

import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react"
import { EventActions, eventReducer, EventState, initialState } from "@/reducers/events-reducer"

//Types
type EventContextProps = {
    state: EventState
    dispatch: Dispatch<EventActions>
}

type EventProviderProps = {
    children: ReactNode
}

//BoilderPlate del context

//Se crea el context
export const EventContext = createContext<EventContextProps>(null!)

//Se crea el provider
export const EventProvider = ({ children }: EventProviderProps) => {

    const [state, dispatch] = useReducer(eventReducer, initialState)

    return (
        <EventContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </EventContext.Provider>
    )
}