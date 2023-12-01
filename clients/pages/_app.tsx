'use client'
import { SessionProvider } from "next-auth/react"
// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }: any) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }

export default function App({children, session}:any)
{
  return(
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}