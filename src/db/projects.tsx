import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { CgFramer } from "react-icons/cg";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";

import type { ProjectType } from "@/types";

export const Projects : ProjectType[] = [
    {
        image: '/01-export.png',
        title: 'Facturador web',
        descripciones: ['Creación del Front-End para una aplicación web para facturar.', '[PROYECTO DE EMPRESA]'],
        techs: [{ logo: <RiNextjsFill />, nombre: 'Next' }, { logo: <BiLogoJavascript />, nombre: 'JavaScript' }, { logo: <RiTailwindCssFill />, nombre: 'Tailwind' }]
    },
    {
        image: '/01-export.png',
        title: 'E-commerce farmacia',
        descripciones: ['Front-End para un E-commerce de una farmacia.', '[PROYECTO DE EMPRESA]'],
        techs: [{ logo: <RiReactjsFill />, nombre: 'React' }, { logo: <BiLogoJavascript />, nombre: 'JavaScript' }, { logo: <FaCss3Alt />, nombre: 'Css' }]
    },
    {
        image: '/01-export.png',
        title: 'NutriLife',
        descripciones: ['Front-End para aplicación para nutriólogos web y móvil.', '[PROYECTO DE EMPRESA]'],
        techs: [{ logo: <RiNextjsFill />, nombre: 'Next' }, { logo: <RiReactjsFill />, nombre: 'Native' }, { logo: <BiLogoJavascript />, nombre: 'JavaScript' }, { logo: <FaCss3Alt />, nombre: 'Css' }, { logo: <SiMui />, nombre: 'MUI' }]
    },
    {
        image: '/01-export.png',
        title: 'Calculadora de consumo y propinas',
        descripciones: ['Mini proyecto que te da el precio de lo que consumió y la propina.', 'En este se usaron conceptos como Hooks (useState y useMemo para mejora de performance), así como el uso de un Custom Hook para escalabilidad.'],
        techs: [{ logo: <RiReactjsFill />, nombre: 'React' }, { logo: <BiLogoTypescript />, nombre: 'TypeScript' }, { logo: <RiTailwindCssFill />, nombre: 'Tailwind' }, { logo: <SiMui />, nombre: 'MUI' }],
        link: 'https://calculadora-consumo-propina-gimikode.netlify.app/'
    },
    {
        image: '/01-export.png',
        title: 'Contador de calorías',
        descripciones: ['Mini proyecto que cuenta las calorías que se queman y consumen.', 'Se puso en práctica los Hooks de React en específico useState, useEffect, useMemo(Para mejora de rendimiento) y useReducer(Para almacenar los datos).'],
        techs: [{ logo: <RiReactjsFill />, nombre: 'React' }, { logo: <BiLogoTypescript />, nombre: 'TypeScript' }, { logo: <RiTailwindCssFill />, nombre: 'Tailwind' }, { logo: <CgFramer />, nombre: 'Framer_Motion' }],
        link: 'https://contador-calorias-gimikode.netlify.app/'
    }
]