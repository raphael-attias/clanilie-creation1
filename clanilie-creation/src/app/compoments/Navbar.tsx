import Link from 'next/link'
import { useState } from "react"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/cration">Nos Création</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
