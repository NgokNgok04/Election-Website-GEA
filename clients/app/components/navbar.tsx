import React from "react"
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="w-full fixed z-40">
        <div
            className="
                px-4
                md:px-16
                py-6
                flex
                flex-row
                items-center
            "
        > <Link href="/login">
            <img className="h-8 lg:h-10" src="/images/logoGEA.png" alt="" />
          </Link>
        </div>

    </nav>
  )
}

export default Navbar