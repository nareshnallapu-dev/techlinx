import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return <>
    <Header/>
    <div>{children}</div>
    <Footer/>
    </>

}

export default Layout