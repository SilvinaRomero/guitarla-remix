import { useLoaderData,useNavigate } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'


export async function loader({ params }) {
    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)
    // 404
    if(guitarra.data.length === 0){
        throw new Response(null,{
            status:404,
            statusText: 'La Guitarra no ha sido encontrada'
        })
    }
    return guitarra.data;
}

export function meta({data}){
    // si loader tiene info y la pasa al componente, tenemos disponible data, es de remix
    return ([
        {
            title: `GuitarLA - ${data[0].attributes.nombre}`,
        },
        {
            description:`Guitarras, venta de guitarras, guitarra ${data[0].attributes.nombre}`
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

function GitarraURL() {
    const guitarra = useLoaderData()
    const  navigate = useNavigate()
    const { id, attributes } = guitarra[0]

    const { nombre, descripcion, imagen, precio, url } = attributes
    
    return (
        <main className='contenedor guitarra top'>
            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>{descripcion}</p>
                <p className='precio'>${precio}</p>
                <button onClick={() => navigate(-1)} className="enlace">Volver</button>
            </div>
        </main>
    )
}

export default GitarraURL
