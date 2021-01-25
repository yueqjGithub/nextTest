import '../styles/globals.css'
import MainLayout from '../layouts/mainLayout'
function MyApp({ Component, pageProps, ...props }) {
  console.log(props)
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
