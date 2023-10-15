import { getGuitarras } from "../models/guitarras.server"
import { useLoaderData } from "@remix-run/react"
import Guitarra from "../components/guitarra"
import ListadoGuitarras from "../components/listado-guitarras"
import styles from '../styles/guitarras.css'

export function meta(){
    return ([
        {
            title: 'GuitarLA - Tienda',
        },
        {
            description:'GitarLA - Nuestra colección de guitarras'
        }

    ])
}

export function links(){
    return [
        {
            rel:'stylesheet',
            href:styles
        }
    ]
}

export async function loader() {
    const guitarras = await getGuitarras()
    return guitarras.data
}


function Tienda() {
    const guitarras = useLoaderData();
    // console.log(guitarras)
    return (
        <main className="contenedor">
            <ListadoGuitarras 
                guitarras={guitarras}
                titulo="Nuestra colección"
            />
        </main>
    )
}

export default Tienda
