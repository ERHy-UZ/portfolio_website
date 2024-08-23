'use client'

import { ReactNode } from "react"
import { useEvent } from "@/hooks/useEvent"

type FlickerMainProps = {
    children: ReactNode
    classes?: string
}

export default function FlickerMain({ children, classes }: FlickerMainProps) {

    const { state } = useEvent()

    return (
        <main className={`${classes} ${state.flicker && 'flicker'}`}>{children}</main>
    )
}
