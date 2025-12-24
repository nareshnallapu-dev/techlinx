import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import parse from "html-react-parser"
import ImgBannerComponent from "../components/ImgBannerComponent"
import ScrollToTop from '../components/scrollToTopButton'
import ImgTextWidget from '../components/ImgTextWidget';
import ImgTextWidgetTwo from '../components/ImgTextWidgetTwo';
import ImgTextWidgetTwoPlain from '../components/ImgTextWidgetTwoPlain';
import CallToActionImg from '../assets/CallToAction.png'
import WhyImg from '../assets/whyImg.svg'
import WeSupportImg from '../assets/weSupport.jpg'
import OptimizationImg from '../assets/optimization.jpg'
import AutomationImg from '../assets/automationImg.svg'
import EimImg from '../assets/eim.jpg'
import Layout from "../Layout/Layout";
import ImgTextWidgetTrpnt from '../components/ImgTextWidgetTrpnt';
import TextWidgetPlainAi from '../components/TextWidgetPlainAi';
const AiAutomation = () => {
    return <>
    <Layout>
        
        <ImgBannerComponent title={'Intelligent HR Automation That Drives Real Hiring Outcomes'} text={'Techlinx enables enterprises to activate AI-driven automation on Phenom—reducing manual effort, accelerating hiring, and improving candidate and recruiter experiences at scale.'} btnText={parse('Talk to a Phenom AI Expert')} ImgBanner={AutomationImg}/>

        <ImgTextWidgetTwoPlain title={'Why Techlinx'} ImgBanner={WhyImg} point1={'Deep expertise in Phenom AI & automation'} point2={'Enterprise-ready delivery & QA discipline'} point3={'Proven post-go-live optimization experience'}/>

        <TextWidgetPlainAi title={'What We Automate on Phenom'}/>

        <ImgTextWidgetTwoPlain title={'Call to Action'} subTitle={'Ready to Activate AI Automation on Phenom?'} listItem={''} ImgBanner={CallToActionImg} point1={'Phenom AI Automation'} point2={' Enterprise-Ready'} point3={'Outcome-Driven'} btnTxt={'Schedule a Consultation'}/>
        <ScrollToTop />
    </Layout>
    </>
}
export default AiAutomation;