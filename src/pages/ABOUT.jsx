import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import ImgBannerComponent from "../components/ImgBannerComponent"
import ImgBanner from '../assets/banner3.avif'
import Breadcrumb from "../components/Breadcrumb";
import Layout from "../Layout/Layout";
import ImgMediaCard from '../components/ImgMediaCard'
import MissionImg from '../assets/mission.png'
import ApproachImg from '../assets/approach.png'
import StoryWidget from "../components/StoryWidget";
import Team from "../components/Team";
const About = () => {
    return <>
    <Layout>
        <Breadcrumb currentPage={'About Us'}/>
        <ImgBannerComponent title={'The Techlinx Build Future'} text={"For too long, HR and recruitment technology has over-promised and under-delivered. Companies are sold powerful platforms, only to be left with clunky, disconnected systems that create more work than they save. Candidates face frustrating, impersonal experiences, and leaders are left without the data they need to make smart decisions. We know this because we've lived it."} point1={'Talent Department Diagnostic (People, Process, Technology)'} point2={'Technology Evaluation Guidance'} point3={'People Analytics & Reporting'} btnText={'Know more'} ImgBanner={ImgBanner}/>
        <Box sx={{py:8, background: '#fff'}}>
            <Container >
                <Grid container spacing={2} sx={{flexGrow: '1', display: 'flex'}}>
                    <Grid size={{md:6, xs: 12}} sx={{display: 'flex'}}>
                    <ImgMediaCard CardImg={MissionImg} cardTitle={'Our Mission & Vision'} cardText={'Enabling recruiters to effortlessly connect with top talent through cutting-edge HR innovations.'}/>
                    </Grid>
                    <Grid size={{md:6, xs: 12}}>
                    <ImgMediaCard CardImg={ApproachImg} cardTitle={'Our Approach'} cardText={'Crafting tailored solutions to simplify recruitment processes and maximize talent acquisition success.'}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <StoryWidget/>
        <Team/>
    </Layout>
    </>
}
export default About;