import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta(){
    return ([
        {
            title: 'GuitarLA - Nosotros',
        },
        {
            description:'GitarLA - Nuestra misión y visión'
        }

    ])
}

export function links(){
    return [
        {
            rel:'stylesheet',
            href:styles
        },
        {
            rel:'preload',
            href:imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
    return (
        <>
            <main className="contenedor nosotros">
                <h2 className="heading">Nosotros</h2>

                <div className="contenido">
                    <img src={imagen} alt="imagen sobre nosotros" />
                    <div className=''>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet egestas odio aliquet elementum. Phasellus rutrum purus tellus, ac fringilla augue rutrum ut. Ut non dapibus nisi, nec pellentesque tortor. Phasellus dignissim sagittis lacinia. Morbi pharetra nisl vitae pharetra consequat. Sed ultrices euismod diam, dapibus suscipit magna pulvinar ut. Etiam auctor lectus a quam malesuada, ac lobortis metus sollicitudin. Donec iaculis, velit vitae aliquam vehicula, augue magna hendrerit dui, eu maximus odio augue id ligula. Ut sit amet egestas turpis, sed tincidunt massa.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet egestas odio aliquet elementum. Phasellus rutrum purus tellus, ac fringilla augue rutrum ut. Ut non dapibus nisi, nec pellentesque tortor. Phasellus dignissim sagittis lacinia. Morbi pharetra nisl vitae pharetra consequat. Sed ultrices euismod diam, dapibus suscipit magna pulvinar ut. Etiam auctor lectus a quam malesuada, ac lobortis metus sollicitudin. Donec iaculis, velit vitae aliquam vehicula, augue magna hendrerit dui, eu maximus odio augue id ligula. Ut sit amet egestas turpis, sed tincidunt massa.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Nosotros
