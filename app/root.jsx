import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header';
import Footer from './components/footer';
import Error from './components/error';

export function meta() {
    const error = useRouteError();
    if (error?.status === 404) {
        return ([
            {
                title: `GuitarLA - 404`,
            },
            {
                description: `Contenido no encontrado`
            }
        ])
    }

    return [
        { charset: "utf-8" },
        { title: "GuitarLA - Remix" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { description: 'Venta de guitarras, blog de música y más!' }
    ];
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        }, {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        }, {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App() {
    return (
        <Document>
            <Header />
            <Outlet />
        </Document>
    )
}

function Document({ children }) {
    return (

        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

/** Manejo de errores */
export function ErrorBoundary() {
    const error = useRouteError()
    if (isRouteErrorResponse(error)) {
        return (
            <Document>
                <Header />
                <div className='contenedor'>
                    <div className='contenido'>
                        <Error
                            error={error}
                        />
                    </div>
                </div>
            </Document>
        )
    }
}