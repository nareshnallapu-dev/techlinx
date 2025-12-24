
    import AbstractBg from '../assets/abstract_bg.jpg'
    import { Container, Grid, Box, Typography, Button } from '@mui/material';
    import gsap from "gsap"
    import { useGSAP } from "@gsap/react"
    import { useRef } from "react"
    import List from '@mui/material/List';
    import ListItem from '@mui/material/ListItem';
    import ListItemText from '@mui/material/ListItemText';
    import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
    import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
    import abstractBglinesImg from '../assets/abstractBglines.jpg'
    import TextWidgetCard from './TextWidgetCard';

    function TextWidgetPlainAi({title}) {


          const animateRef = useRef(null)
          const animateRef1 = useRef(null)
          const animateRef2 = useRef(null)
          useGSAP(() => {
              gsap.to(animateRef.current, { x: 0, duration: 2, ease: 'fade.in',})
              gsap.to(animateRef1.current, {opacity:1, duration: 2.2, ease: 'fade.in'})
              gsap.to(animateRef2.current, {opacity:1, duration: 2.5, ease: 'fade.in',})
          },  {})
          
    return (
      <Box sx={{ background: `url(${abstractBglinesImg})`, py: 8, 
                  // Responsive styles using breakpoints
            '@media (max-width: 767px)': { // md breakpoint
              py:4
            },
        }}>
        <Container>
          <Grid container spacing={6} alignItems="baseline">
            <Grid item size={{ xs: 12, md: 12 }}>
              <Typography ref={animateRef} variant="h4" component="h3" gutterBottom sx={{ fontWeight: '700',
              transform: 'translateX(-20px)', textAlign: 'center'}}>
                {title}
              </Typography>
            </Grid>
            {/* Image Column */}
            {/* Text Column */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextWidgetCard listItem={'Candidate Engagement'} point1={'AI-driven job recommendations'} point2={'Automated campaigns & rediscovery'} point3={'Conversational AI workflows'} point4={''} cardBottomHead={'Outcome:'} cardBottomText={'Higher engagement, better conversion'}/>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextWidgetCard listItem={'Screening & Matching'} point1={'AI-based candidate ranking'} point2={'Smart shortlisting & routing'} point3={'Reduced manual screening'} point4={''} cardBottomHead={'Outcome:'} cardBottomText={'Faster, higher-quality pipelines'}/>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextWidgetCard listItem={'Recruiter Productivity'} point1={'AI-recommended actions'} point2={'Automated follow-ups & reminders'} point3={'Intelligent alerts & insights'} point4={''} cardBottomHead={'Outcome:'} cardBottomText={'Recruiters focus on hiring, not admin work'}/>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextWidgetCard listItem={'Workflow Automation'} point1={'Event-based workflow triggers'} point2={'ATS & CRM automation'} point3={'Exception handling'} point4={''} cardBottomHead={'Outcome:'} cardBottomText={'Consistent, scalable hiring operations'}/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
    }

    export default TextWidgetPlainAi;