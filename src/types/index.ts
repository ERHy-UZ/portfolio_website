import { ReactNode } from "react"

export type FooterTechs = {
    logo: ReactNode,
    nombre: string
}

export type ProjectType = {
    image: string
    title: string
    descripciones: string[]
    techs: FooterTechs[]
    link?: string
  }