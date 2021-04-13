import axios from 'axios';
import '../styles/globals.css'
import '../styles/nprogress.css'
import {Provider} from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'     
import store from '../state/store'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import {SWRConfig} from 'swr'
import toast, { Toaster } from 'react-hot-toast';
import jQuery from 'jquery'; 
// import jQuery from 'jquery'; 
import { useEffect } from 'react';
// import 'tailwindcss/tailwind.css'
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {

  NProgress.configure({
    showSpinner: false
  });


  Router.events.on('routeChangeStart', () => {
    // toast.loading('Loading...',{
    //   id: 'push',
    // });
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', () => {
    // const toastId = toast.loading('Loading...');
    // toast.dismiss('push')

    $('body').removeClass('az-header-menu-show');

    NProgress.done()
  })


  Router.events.on('routeChangeError', () => {
    // toast.dismiss('push')
    NProgress.done()
  })

  useEffect(() => {
      window.jQuery = jQuery
      window.$ = jQuery
  }, [])

  const Layout = Component.layout || EmptyLayout

  return <Provider store={store}>
    <SWRConfig value={{ fetcher: (url) => axios(url).then(r => r.data) }}>
      <Layout>
        <Component {...pageProps} />
        <Toaster/>
      </Layout>
    </SWRConfig>
  </Provider> 
}

const makestore = () => store

const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)

// export default MyApp

const EmptyLayout = ({children}) => {
     return <>
      {children}
     </>
}