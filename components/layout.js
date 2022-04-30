import Navbar from './navbar'
import Footer from './footer'
import { Navbar2 } from './navbar2'

export default function Layout({ children }) {
  return (
    <>
      <Navbar2 />
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}