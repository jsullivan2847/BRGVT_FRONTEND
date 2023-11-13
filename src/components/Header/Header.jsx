import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
        <ul className='header-nav'>
            <li>
            <h1>BRGVT</h1>
            </li>
            <li>
            <a className="nav-link" href="/"><h2>Products</h2></a>
            </li>
            <li>
            <a className="nav-link" href="/"><h2>Archive</h2></a>
            </li>
        </ul>
  </header>
  )
}
