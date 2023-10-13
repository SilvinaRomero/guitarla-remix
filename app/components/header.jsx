import { Link, useLocation } from "@remix-run/react"
import Logo from '../../public/img/logo.svg'

function Header() {
    const location = useLocation()
    // console.log(location)
    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to='/' className="logo">
                    <img className="logo" src={Logo} alt="logo" />
                </Link>
                <nav className="navegacion">
                    <Link
                        to="/"
                        className={location.pathname === '/' ? 'active' : ''}
                    >Inicio</Link>
                    <Link
                        to="/nosotros"
                        className={location.pathname === '/nosotros' ? 'active' : ''}
                    >Nosotros</Link>
                    <Link
                        to="/tienda"
                        className={location.pathname === '/tienda' ? 'active' : ''}
                    >Tienda</Link>
                    <Link
                        to="/blog"
                        className={location.pathname === '/blog' ? 'active' : ''}
                    >Blog</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
