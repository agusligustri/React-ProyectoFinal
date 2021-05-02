import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'



export const NotFound = ({user}) => {
    return (
        <div className="not-found">
            <Navbar user={user} />
            <h1> ¡Ooops!, La página no ha sido encontrada </h1>
            <div><Link to="/"><p>Volver a la página principal</p></Link></div>
        </div>
    )
}
