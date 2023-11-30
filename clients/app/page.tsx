import Link from 'next/link'
import {useSession} from "next-auth/react"


export default function Home(){

  return (
    <main>
      <h1 className="text-2xl text-green-500">
         Nigga
      </h1>
      <Link href="api" className="text-9xl text-white">Auth</Link>
    </main>
  )
}
