import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export function meta({data}){
    // si loader tiene info y la pasa al componente, tenemos disponible data, es de remix
    // console.log(data[0].attributes)
    return ([
        {
            title: `GuitarLA - ${data[0].attributes.nombre}`,
        },
        {
            description:`Gitarras, venta de guitarras, guitarra ${data[0].attributes.nombre}`
        }

    ])
}
export function links(){
    return[
        {
            rel:'stylesheet',
            href:styles
        }
    ]
}

export async function loader({ params }) {

    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)

    return guitarra.data;
}

function GitarraURL() {
    const guitarra = useLoaderData()
    const { id, attributes } = guitarra[0]

    const { nombre, descripcion, imagen, precio, url } = attributes
    // console.log(nombre)
    return (
        <main className='contenedor guitarra top'>
            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>{descripcion}</p>
                <p className='precio'>${precio}</p>
            </div>
        </main>
    )
}

export default GitarraURL
