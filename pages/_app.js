import '../styles/globals.css'
import Router from 'next/router'
import {useState} from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { BallTriangle } from  'react-loader-spinner'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading]= useState(false)
  Router.events.on('routeChangeStart', ()=>setLoading(true))

  Router.events.on('routeChangeComplete', ()=>setLoading(false))

  return (
  <>
    {loading && <div style={{width: '100vw', height: '100vh',
      justifyContent: 'center', display: 'flex',
      alignItems: 'center', backgroundColor: '#222831', position: 'absolute', zIndex: 2 }}>
      <BallTriangle color="#ffd269" height={80} width={80} />
      </div>}
    <Component {...pageProps} />
  </>)
}

export default MyApp
