import { useNavigate } from "@remix-run/react"

function Error({ error }) {
    const  navigate = useNavigate()
    return (
        <>
            <div className='errores'>
                <p className='resaltado'>
                    {error.status}
                </p>
                <p className=''>
                    Lo sentimos, ha habido un error: {''}
                    <br /><span className='error'>
                        {error.statusText}

                    </span>
                </p>
                <button onClick={() => navigate(-1)} className="enlace">Volver</button>
            </div>
        </>
    )
}

export default Error
