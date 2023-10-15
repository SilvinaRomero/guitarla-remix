import Guitarra from "./guitarra"

function ListadoGuitarras({guitarras,titulo}) {
    return (
        <>
            <h2 className="heading">{titulo}</h2>
        
            {guitarras.length && (
                
                <div className="guitarras-grid">
                   
                    {guitarras.map(guitarra => (
                        <Guitarra
                            key={guitarra?.id}
                            guitarra={guitarra}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default ListadoGuitarras
