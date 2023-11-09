import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Bottom from '@/components/bottom'
import { Abel } from 'next/font/google'


const roboto = Abel({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Navbar/>
      <Component {...pageProps}/>
      <Bottom/>
      <Footer/>
    </main>
  )
}
