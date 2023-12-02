import Link from 'next/link'
export default function Home(){
  return (
    <main>
      <h1 className="text-2xl text-green-500">
         test
      </h1>
      <Link href="Login" className="text-9xl text-white">Auth</Link>
    </main>
  )
}
