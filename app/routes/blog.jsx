import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server"
import styles from "~/styles/blog.css"
import ListadoPosts from "../components/listado-posts";


export async function loader() {
    const posts = await getPosts();

    return posts.data
}

export function meta() {
    return ([
        {
            title: `GuitarLA - Blog`,
        },
        {
            description: 'GitarLA - Blog de música y venta de guitarras'
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

function Blog() {
    const posts = useLoaderData()
    
    return (
        <main className="contenedor altura">
           <ListadoPosts 
            posts={posts}
           />
        </main>
    )
}

export default Blog
