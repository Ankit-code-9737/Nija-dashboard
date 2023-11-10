import "@/app/globals.css"
import Head from "next/head"

import { Sidebar, Topbar } from "@/components/organisms"

export const metadata = {
  title: "Nija Dashboard",
  description: "Generated by create next app",
  icons: {
    icon: "./favicon.ico"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <body className={`UI-Ecommerce`}>
        <div className='fixed left-0 top-0 z-10 w-64 2xl:w-72'>
          <Sidebar />
        </div>

        <div className='fixed inset-0 z-10 ml-64 h-20 w-[calc(100vw_-_256px)] 2xl:ml-72 2xl:w-[calc(100vw_-_288px)]'>
          <Topbar />
        </div>

        <main className='relative z-0 min-h-screen bg-netral-20/50 pl-64 pt-20 2xl:pl-72'>
          {children}
        </main>
      </body>
    </html>
  )
}
