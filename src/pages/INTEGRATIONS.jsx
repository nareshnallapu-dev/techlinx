import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import parse from "html-react-parser"
import ImgBannerComponent from "../components/ImgBannerComponent"
import AboutBanner from '../assets/about-us.jpg'
import WhoWeAre from '../assets/whoweare.jpg'
import WhatWeDoImg from '../assets/whatwedo.jpg'
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
import EimImg from '../assets/eim.jpg'
import Layout from "../Layout/Layout";
import ImgTextWidgetTrpnt from '../components/ImgTextWidgetTrpnt';
import TextWidgetPlain from '../components/TextWidgetPlain';
const Integrations = () => {
    return <>
    <Layout>
        
        <ImgBannerComponent title={'Seamless Phenom Integrations for Enterprise HR Ecosystems'} text={'Techlinx enables secure, scalable Phenom integrations across your HR technology landscape—ensuring smooth data flow, automation, and operational stability across enterprise systems.'} btnText={parse('Talk to an Integration Expert')} ImgBanner={AutomationImg}/>

        <ImgTextWidgetTwoPlain title={'Why Techlinx'} ImgBanner={WhyImg} point1={'Deep expertise in Phenom AI & automation'} point2={'Enterprise-ready delivery & QA discipline'} point3={'Proven post-go-live optimization experience'}/>

        <TextWidgetPlain title={'What We Integrate with Phenom'} listItem={'HRIS & Core Systems'} point1={'Workday'} point2={'SAP SuccessFactors'} point3={'Oracle HCM'} point4={'iCIMS'} cardBottomHead={'Outcome:'} cardBottomText={'Higher engagement, better conversion'}/>

        <ImgTextWidgetTwoPlain title={'Call to Action'} subTitle={'Ready to Activate AI Automation on Phenom?'} listItem={''} ImgBanner={CallToActionImg} point1={'Phenom AI Automation'} point2={' Enterprise-Ready'} point3={'Outcome-Driven'} btnTxt={'Schedule a Consultation'}/>
        <ScrollToTop />
    </Layout>
    </>
}
export default Integrations;