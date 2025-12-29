import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/Footer'
import FooterBottom from '../Footer/FooterBottom'
import TopBar from '../components/TopBar';
import { Helmet } from 'react-helmet-async';
import OgImage from '../assets/og/OG_Image.jpg'

const Layout = ({children}) => {
  return <>
    <TopBar/>
    <Header/>
    <div>{children}</div>
    <Footer/>
    <FooterBottom/>
    </>

}

export default Layout