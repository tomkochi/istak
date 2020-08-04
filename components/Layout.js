import Footer from '../components/footer'
import Header from '../components/header'
import { useRouter } from 'next/router'
import '../public/css/global.css'
import { useEffect } from 'react'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

const Layout = (props) => {
  const router = useRouter()

  useEffect(() => {
    //new WOW().init();
  }, [])

  return (
    <div className="layout">
      {router.pathname !== '/' && <Header />}
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
