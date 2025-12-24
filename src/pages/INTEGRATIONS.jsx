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
import WeSupportImg from '../assets/weSupport.jpg'
import OptimizationImg from '../assets/optimization.jpg'
import AutomationImg from '../assets/automationImg.svg'
import AbstractBg from '../assets/abstract_bg.jpg'
import Layout from "../Layout/Layout";
import TextWidgetPlain from '../components/TextWidgetPlain';
const Integrations = () => {
    return <>
    <Layout>
        
        <ImgBannerComponent title={'Seamless Phenom Integrations for Enterprise HR Ecosystems'} text={'Techlinx enables secure, scalable Phenom integrations across your HR technology landscape—ensuring smooth data flow, automation, and operational stability across enterprise systems.'} btnText={parse('Talk to an Integration Expert')} ImgBanner={IntegrationBannerImg}/>

        <ImgTextWidgetTwoPlain AbstractBg={'#ffffff'} title={'Why Techlinx'} ImgBanner={WhyImg} point1={'Proven Phenom integration expertise'} point2={'Experience with complex enterprise HR landscapes'} point3={'Strong governance and post-go-live support'}/>

        <TextWidgetPlain title={'What We Integrate with Phenom'}/>

        <ImgTextWidget AbstractBg={''} title={'Our Integration Approach'} btnText={''} ImgBanner={IntegrationApproachImg} point1={'Enterprise-ready architecture & security'} point2={'API-based and file-based integrations'} point3={'Robust validation, error handling & monitoring'} point4={'QA-first testing and release support'}/>

        <ImgTextWidgetTwoPlain AbstractBg={AbstractBg} title={'Call to Action'} subTitle={'Planning a Phenom Integration or Optimization?'} listItem={''} ImgBanner={CallToActionImg} point1={'Connected HR Systems'} point2={'Powered by Phenom'} point3={''} btnTxt={'Schedule an Integration Consultation'}/>
        <ScrollToTop />
    </Layout>
    </>
}
export default Integrations;