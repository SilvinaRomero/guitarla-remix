import { useLoaderData, useNavigate } from "@remix-run/react"
import { getPost } from "../models/post.server"
import styles from '../styles/blog.css'
import { formatearFechaCompleta } from "~/utils/helpers"

export async function loader({ params }) {
    const { postUrl } = params
    const post = await getPost(postUrl)
    // 404
    if (post.data.length === 0) {
        throw new Response(null, {
            status: 404,
            statusText: 'El Post no ha sido encontrado'
        })
    }
    return post.data;
}

export function meta({ data }) {
    // si loader tiene info y la pasa al componente, tenemos disponible data, es de remix
    return ([
        {
            title: `GuitarLA - ${data[0].attributes.titulo}`,
        },
        {
            description: `Guitarras, venta de guitarras, entrada ${data[0].attributes.titulo}`
        }
    ])
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}


function PostUrl() {
    const post = useLoaderData()
    const navigate = useNavigate()
    const { id, attributes } = post[0]
    const { contenido, imagen, titulo, url, publishedAt } = attributes

    return (
        <article className='contenedor postmain post'>
            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen del post ${titulo}`} />
            <div className='contenido '>
                <h3>{titulo}</h3>
                <p className='texto overflow'>{contenido}</p>
                <p className='precio'>{formatearFechaCompleta(publishedAt)}</p>
                <button onClick={() => navigate(-1)} className="enlace">Volver</button>
            </div>
        </article>
    )
}

export default PostUrl
