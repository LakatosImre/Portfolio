import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <h1>Lakatos Imre</h1>
        <h3>Developer & Electrician</h3>
        <nav className='navBar'>
            <ul className='routing'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contacts'}>Contacts</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
