import { Link } from "@remix-run/react"


function Guitarra({guitarra}) {
    const {attributes,id} = guitarra
   
    const {descripcion, imagen, precio, url, nombre} = attributes
    console.log()
  return (
    <div className="guitarra">
        <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>

        <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  )
}

export default Guitarra
