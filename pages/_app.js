// import React, {useEffect} from 'react'
import 'antd/dist/antd.css'
import '../styles/globals.scss'
// import MainLayout from '../layouts/mainLayout'
function MyApp({ Component, pageProps, ...props }) {
  // useEffect(() => {
  //   const width = document.body.clientWidth
  //   if (width < 850) {
  //     window.location.href = 'https://www.baidu.com'
  //   }
  // }, [])
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
