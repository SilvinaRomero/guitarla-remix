import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/post.server"
import { getCurso } from "../models/cusro.server"
import ListadoGuitarras from "../components/listado-guitarras"
import ListadoPosts from "../components/listado-posts"
import Curso from "../components/curso"
import stylesGuitarras from '../styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '../styles/curso.css'
import stylesDemo from '../styles/demo.css'

export function meta() {

}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitarras
        },
        {
            rel: 'stylesheet',
            href: stylesPosts
        },
        {
            rel: 'stylesheet',
            href: stylesCurso
        },
        {
            rel: 'stylesheet',
            href: stylesDemo
        }
    ]
}

export async function loader() {

    const [guitarras, posts, curso] = await Promise.all([
        getGuitarras(),
        getPosts(),
        getCurso()
    ])
    console.log('cuantas hay')
    console.log(guitarras)


    return {
        guitarras: guitarras.data,
        posts: posts.data,
        curso: curso.data
    }
}

function Index() {

    const { guitarras, posts, curso } = useLoaderData()

    return (
        <>
            <main className="contenedor altura">
                <ListadoGuitarras
                    guitarras={guitarras}
                    titulo="Gitarras disponibles"
                />

            </main>

            <Curso
                curso={curso}
            />

            <section>
                <ListadoPosts
                    posts={posts}
                />
            </section>
        </>
    )
}

export default Index
