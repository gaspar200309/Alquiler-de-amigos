import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarN() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to ="home">Inicio</Link>
                </li>
                <li>
                    <Link to = "listfriend" >Amigos</Link>
                </li>
                <li>
                    <Link to = "form"> Registrarse</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}
