import {
    Meta
} from '@remix-run/react'


export function meta() {
    return [
      { charset: "utf-8" },
      { title: "GuitarLA - Remix" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
    ];
  }

export function linds(){
    return [
        {
            
        }
    ]
}

export default function App() {
    return (
        <Document>
            hola soy el hijo
        </Document>
    )
}

function Document({ children }) {
    return (

        <html lang="en">
            <head>
                <Meta />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}