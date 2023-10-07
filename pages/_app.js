import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Bottom from '@/components/bottom'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps}/>
  <Bottom/>
  <Footer/>
  </>
}
