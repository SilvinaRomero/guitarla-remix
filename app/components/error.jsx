import { Link } from "@remix-run/react"

function Error({ error }) {
    return (
        <>
            <div className='errores'>
                <p className='resaltado'>
                    {error.status}
                </p>
                <p className=''>
                    Ha habido un error: {''}
                    <br /><span className='error'>
                        {error.statusText}

                    </span>
                </p>

                <Link to='/' className="enlace">Volver al inicio</Link>


            </div>
        </>
    )
}

export default Error
