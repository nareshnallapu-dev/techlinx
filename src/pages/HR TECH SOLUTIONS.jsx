import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import parse from "html-react-parser"
import ImgBannerComponent from "../components/ImgBannerComponent"
import AbstractBg from '../assets/abstract_bg.jpg'
import WhyPT from '../assets/whyPT.svg'
import AtsImg from '../assets/atsImg.svg'
import CmsImg from '../assets/cmsImg.svg'
import TrustImg from '../assets/trustImg.svg'
import ScrollToTop from '../components/scrollToTopButton'
import ImgTextWidget from '../components/ImgTextWidget';
import ImgTextWidgetTwo from '../components/ImgTextWidgetTwo';
import ImgTextWidgetTwoPlain from '../components/ImgTextWidgetTwoPlain';
import CallToActionImg from '../assets/CallToAction.png'
import WeSupportImg from '../assets/weSupport.svg'
import UpgradeImg from '../assets/upgrade.svg'
import Complexity from '../assets/complexity.svg'
import AiAutomation from '../assets/aiAutomation.svg'
import PartnerImg from '../assets/partnerImg.svg'
import EimImg from '../assets/eim.jpg'
import Layout from "../Layout/Layout";
import ImgTextWidgetTrpnt from '../components/ImgTextWidgetTrpnt';
const HrTechSolutions = () => {
    return <>
    <Layout>
        
        <ImgBannerComponent title={'End-to-End HR Technology Services for Enterprise Transformation'} text={'Techlinx partners with enterprises to design, implement, and optimize modern HR technology ecosystems. With deep expertise in Phenom and leading HR platforms, we help organizations deliver scalable, secure, and intelligent talent solutions that drive measurable business outcomes.'} btnText={parse('Talk to an HR Tech Expert')} ImgBanner={PartnerImg}/>

        {/* <ImgTextWidgetTrpnt title={'Why Phenom. Why Techlinx.'} text={["Phenom is a powerful platform—but enterprise success depends on how it is implemented, integrated, and governed.", <br/>, "Techlinx brings deep Phenom expertise, strong delivery discipline, and an enterprise-first mindset to ensure predictable outcomes."]} ImgBanner={WhyPT}/> */}

        {/* <ImgTextWidgetTwo title={'Phenom ATS & CRM'} subTitle={'Enterprise Hiring, Designed for Scale'} text={'We implement and optimize Phenom ATS and CRM to support high-volume, global hiring with consistency and control.'} listItem={'Capabilities:'} ImgBanner={AtsImg} point1={'ATS & CRM configuration and rollout'} point2={'Hiring workflow design & optimization'} point3={'Recruiter and hiring manager enablement'} point4={'Compliance-ready enterprise setups'} cardBottomHead={'Business Impact:'} cardBottomText={'Faster hiring cycles, improved recruiter productivity, and consistent hiring processes.'}/> */}

        <ImgTextWidgetTwoPlain title={'Our HR Technology Solution Areas'} subTitle={'Talent Acquisition Platforms'} subTitle2={'Modern Hiring at Enterprise Scale'} text={'We implement and optimize enterprise-grade talent acquisition platforms that enable high-volume, high-quality hiring while delivering exceptional candidate and recruiter experiences.'} listItem={'Key Capabilities:'} ImgBanner={CmsImg} point1={'Phenom ATS & CRM Implementations'} point2={'Career Sites & Content Management'} point3={'Candidate Engagement & Automation'} point4={'Job Distribution & Campaign Management'} point6={'Faster time-to-hire'} point7={'Improved candidate conversion'} point8={'Consistent hiring experiences globally'} cardBottomHead={'Business Impact:'} cardBottomText={''}/>

        <ImgTextWidgetTwo title={'Phenom AI & Automation'} subTitle={'Turning AI Capability into Business Results'} text={'We enable AI-driven automation across Phenom to reduce manual effort and improve decision-making.'} listItem={'Capabilities:'} ImgBanner={AiAutomation} point1={'AI-based candidate matching & ranking'} point2={'Intelligent candidate engagement automation'} point3={'Recruiter productivity workflows'} point4={'Rediscovery and re-engagement automation'} cardBottomHead={'Business Impact:'} cardBottomText={'Reduced time-to-fill, higher quality pipelines, scalable hiring operations.'} btnTxt={'Explore Phenom AI Automation'}/>

        <ImgTextWidgetTwoPlain title={'Enterprise Implementations & Rollouts'} subTitle={'Built for Complexity and Governance'} text={'We specialize in Phenom implementations for enterprise environments with complex integrations, regional needs, and governance requirements.'} listItem={'Capabilities:'} ImgBanner={Complexity} point1={'Global and phased rollouts'} point2={'Data migration & validation'} point3={'Enterprise integration orchestration'} point4={'Structured UAT and go-live support'} cardBottomHead={'Business Impact:'} cardBottomText={' Predictable delivery, lower risk, smoother enterprise adoption.'}/>

        <ImgTextWidgetTwo title={'Optimization, Upgrades & Enhancements'} subTitle={'Maximizing ROI from Phenom'} text={'Beyond go-live, we help enterprises continuously improve their Phenom platform.'} listItem={'Capabilities:'} ImgBanner={UpgradeImg} point1={'Platform optimization & enhancements'} point2={'Release and upgrade support'} point3={'Performance and stability improvements'} point4={'Adoption and usage optimization'} cardBottomHead={'Business Impact:'} cardBottomText={'Sustained performance, higher adoption, continuous value realization.'}/>

        <ImgTextWidgetTrpnt title={'Why Enterprises Trust Techlinx'} ImgBanner={TrustImg} point1={'Specialized focus on Phenom HR technology'} point2={'Proven delivery across enterprise customers'} point3={'Strong QA and governance discipline'} point4={'Long-term partner mindset, not just implementation'}/>

        <ImgTextWidget AbstractBg={AbstractBg} title={'Who We Support'} ImgBanner={WeSupportImg} point1={'CHROs & HR Leadership'} point2={'HRIT & HR Operations Teams'} point3={'Talent Acquisition Leaders'} point4={'Global and Regional Hiring Teams'}/>

        <ImgTextWidgetTwoPlain title={'Call to Action'} subTitle={'Planning a Phenom Implementation or Optimization?'} text={'Whether you are implementing Phenom for the first time, scaling globally, or optimizing an existing setup—Techlinx brings the expertise and accountability enterprises expect.'} listItem={'What enterprises gain with Techlinx:'} ImgBanner={CallToActionImg} point1={'Faster and more scalable Phenom implementations'} point2={'Stable integrations across the HR ecosystem'} point3={'AI capabilities aligned to real hiring workflows'} point4={'Reduced post-go-live risk and operational overhead'} btnTxt={'Schedule a Phenom Consultation'}/>
        <ScrollToTop />
    </Layout>
    </>
}
export default HrTechSolutions;