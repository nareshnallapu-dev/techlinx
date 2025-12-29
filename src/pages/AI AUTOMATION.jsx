import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import parse from "html-react-parser"
import ImgBannerComponent from "../components/ImgBannerComponent"
import ScrollToTop from '../components/scrollToTopButton'
import ImgTextWidgetTwoPlain from '../components/ImgTextWidgetTwoPlain';
import CallToActionImg from '../assets/CallToAction.png'
import WhyImg from '../assets/whyImg.svg'
import AutomationImg from '../assets/automationImg.svg'
import Layout from "../Layout/Layout";
import TextWidgetPlainAi from '../components/TextWidgetPlainAi';
import SEO from "./SEO";

const AiAutomation = () => {
    return <>
    <Layout>
        <SEO title={'Phenom Certified Integration Partner || Techlinx - AI Automation'} description={'Techlinx is an HR technology services company delivering Phenom implementations, AI automation, integrations, and managed services for scalable hiring success. We partner with enterprises to deliver scalable, secure, and high-performing HR technology ecosystems that drive measurable hiring and business outcomes.'} keywords={'Phenom Certified Integration Partner, HR technology services, Phenom implementations, AI in HR, AI-driven HR solutions, Phenom Implementation Partner'} type={"website"}/>

        <ImgBannerComponent title={'Intelligent HR Automation That Drives Real Hiring Outcomes'} text={'Techlinx enables enterprises to activate AI-driven automation on Phenom—reducing manual effort, accelerating hiring, and improving candidate and recruiter experiences at scale.'} btnText={parse('Talk to An AI Automation Expert')} ImgBanner={AutomationImg}/>

        <ImgTextWidgetTwoPlain title={'Why Techlinx'} ImgBanner={WhyImg} point1={'Deep expertise in Phenom AI & automation'} point2={'Enterprise-ready delivery & QA discipline'} point3={'Proven post-go-live optimization experience'}/>

        <TextWidgetPlainAi title={'What We Automate on Phenom'}/>

        <ImgTextWidgetTwoPlain title={'Call to Action'} subTitle={'Ready to Activate AI Automation on Phenom?'} listItem={''} ImgBanner={CallToActionImg} point1={'Phenom AI Automation'} point2={' Enterprise-Ready'} point3={'Outcome-Driven'} btnTxt={'Schedule a Consultation'}/>
        <ScrollToTop />
    </Layout>
    </>
}
export default AiAutomation;