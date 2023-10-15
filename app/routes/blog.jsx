import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server"
import styles from "~/styles/blog.css"
import Post from "../components/post";


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
    // console.log(posts)
    return (
        <main className="contenedor altura">
            <h2 className="heading">Blog</h2>

            <div className="blog">
                {posts.map(post => (
                    <Post
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        </main>
    )
}

export default Blog
