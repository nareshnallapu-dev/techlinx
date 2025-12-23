import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import ImgBannerComponent from "../components/ImgBannerComponent"
import AboutBanner from '../assets/about-us.jpg'
import AbstractBg from '../assets/abstract_bg.jpg'
import WhoWeAre from '../assets/whoweare.jpg'
import WhatWeDoImg from '../assets/whatwedo.jpg'
import WhyChooseImg from '../assets/choose.jpg'
import ImgTextWidget from '../components/ImgTextWidget';
import WeSupport from '../assets/support.jpg';
import Commitment from '../assets/commitment.jpg';
import Layout from "../Layout/Layout";
import ImgTextWidgetTrpnt from '../components/ImgTextWidgetTrpnt';
import ScrollToTop from '../components/scrollToTopButton'
import AboutImg from '../assets/aboutImg.svg'
import WhoAreWe from '../assets/unleashing_exp.jpg'
import WhatWeDo from '../assets/banner-main.png'
const About = () => {
    return <>
    <Layout>
        
        <ImgBannerComponent title={'Enterprise HR Technology Specialists. Phenom Experts.'} text={"Techlinx is an HR technology services company specializing in Phenom implementations, AI automation, integrations, and managed services. We partner with enterprises to deliver scalable, secure, and high-performing HR technology ecosystems that drive measurable hiring and business outcomes."} point1={'Talent Department Diagnostic (People, Process, Technology)'} point2={'Technology Evaluation Guidance'} point3={'People Analytics & Reporting'} ImgBanner={AboutImg}/>
        <ImgTextWidgetTrpnt title={'Who We Are'} text={'We are a team of HR technology specialists with deep experience delivering enterprise-scale talent acquisition solutions. Our focus is simple - help organizations realize the full value of their HR technology investments through structured delivery, strong governance, and continuous optimization.'} ImgBanner={WhoWeAre}/>
        <ImgTextWidget AbstractBg={AbstractBg} title={'What We Do'} ImgBanner={WhatWeDoImg} point1={'Phenom implementations and enterprise rollouts'} point2={'AI-driven HR automation'} point3={'HR systems integrations'} point4={'Quality assurance and platform stability'} point5={'Post-go-live support and managed services'}/>
        <ImgTextWidgetTrpnt title={'Our Approach'} text={'Enterprise-ready. Outcome-driven.'} ImgBanner={WhatWeDo} point1={'Deep platform expertise with Phenom'} point2={'QA-first delivery and risk-managed execution'} point3={'Strong governance and transparency'} point4={'Long-term partnership mindset'}/>
        <ImgTextWidget AbstractBg={AbstractBg} title={'Why Enterprises Choose Techlinx'} ImgBanner={WhyChooseImg} point1={'Specialized focus on Phenom HR technology'} point2={'Proven experience across complex enterprise environments'} point3={'Reliable delivery with minimal post-go-live risk'} point4={'Trusted partner beyond implementation'}/>
        <ImgTextWidgetTrpnt title={'Industries We Support'} ImgBanner={WeSupport} point1={'Engineering & Construction'} point2={'Healthcare'} point3={'Manufacturing'} point4={'Logistics & Transportation'}/>
        <ImgTextWidget AbstractBg={AbstractBg} title={'Our Commitment'} ImgBanner={Commitment} text={'We are committed to helping HR and talent teams build intelligent, scalable, and future-ready hiring platforms—delivered with precision and accountability.'}/>
        <ScrollToTop />
    </Layout>
    </>
}
export default About;