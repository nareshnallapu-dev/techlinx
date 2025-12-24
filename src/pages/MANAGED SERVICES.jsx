import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import parse from "html-react-parser"
import ImgBannerComponent from "../components/ImgBannerComponent"
import AboutBanner from '../assets/about-us.jpg'
import WhoWeAre from '../assets/whoWeAre.svg'
import IntegrationApproachImg from '../assets/integrationApproach.png'
import IntegrationBannerImg from '../assets/integrationBannerImg.png'
import ScrollToTop from '../components/scrollToTopButton'
import ImgTextWidget from '../components/ImgTextWidget';
import ImgTextWidgetTwo from '../components/ImgTextWidgetTwo';
import ImgTextWidgetTwoPlain from '../components/ImgTextWidgetTwoPlain';
import WeSupport from '../assets/support.jpg';
import CallToActionImg from '../assets/CallToAction.png'
import WhyImg from '../assets/whyImg.svg'
import TechSupportImg from '../assets/techSupport.svg'
import DevliveringImg from '../assets/delivering.svg'
import AutomationImg from '../assets/automationImg.svg'
import AbstractBg from '../assets/abstract_bg.jpg'
import Layout from "../Layout/Layout";
import TextWidgetMS from '../components/TextWidgetMS';
const ManagedServices = () => {
    return <>
    <Layout>
        
        <ImgBannerComponent title={'Enterprise-Grade Phenom Support & Optimization'} text={'Techlinx provides structured Phenom managed services to help enterprises stabilize, optimize, and continuously improve their HR technology platforms—well beyond go-live.'} btnText={parse('Talk to a Managed Services Expert')} ImgBanner={TechSupportImg}/>

        <ImgTextWidgetTwoPlain AbstractBg={'#ffffff'} title={'Why Techlinx'} ImgBanner={WhyImg} point1={'Specialized Phenom managed services expertise'} point2={'Experience supporting complex enterprise environments'} point3={'Strong focus on stability, accountability, and outcomes'}/>

        <TextWidgetMS title={'What We Manage'}/>

        <ImgTextWidget AbstractBg={''} title={'How We Deliver'} btnText={''} ImgBanner={DevliveringImg} point1={'Dedicated Phenom support teams'} point2={'QA-first and governance-driven approach'} point3={'Flexible engagement models'} point4={'Proactive monitoring and reporting'}/>

        <ImgTextWidgetTwoPlain AbstractBg={AbstractBg} title={'Call to Action'} subTitle={'Need Reliable Phenom Support Post Go-Live?'} listItem={''} ImgBanner={CallToActionImg} point1={' Phenom Managed Services'} point2={'Stable'} point3={'Scalable'} point4={'Trusted'} btnTxt={'Schedule a Managed Services Consultation'}/>
        <ScrollToTop />
    </Layout>
    </>
}
export default ManagedServices;