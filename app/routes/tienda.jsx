import { getGuitarras } from "../models/guitarras.server"
import { useLoaderData } from "@remix-run/react"
import Guitarra from "../components/guitarra"


export async function loader() {
    const guitarras = await getGuitarras()
    return guitarras.data
}


function Tienda() {
    const guitarras = useLoaderData();
    // console.log(guitarras)
    return (
        <main className="contenedor">
            <h2  className="heading">Nuestra Colección</h2>

            {guitarras.length && (
                <div className="guitaras-grid">
                    {guitarras.map(guitarra => (
                        <Guitarra 
                            key={guitarra?.id}
                            guitarra={guitarra}
                        />
                    ))}
                </div>
            )}
        </main>
    )
}

export default Tienda
