
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

    function TextWidgetMS({title}) {


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
          <Grid container spacing={2} alignItems="baseline">
            <Grid item size={{ xs: 12, md: 12 }}>
              <Typography ref={animateRef} variant="h4" component="h3" gutterBottom sx={{ fontWeight: '700',
              transform: 'translateX(-20px)', textAlign: 'center'}}>
                {title}
              </Typography>
            </Grid>
            {/* Image Column */}
            {/* Text Column */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextWidgetCard listItem={'Post Go-Live Support & Hypercare'} point1={'Production issue management'} point2={'Release stabilization & monitoring'} point3={'SLA-based support models'} point4={''} cardBottomHead={'Outcome:'} cardBottomText={'Stable operations and reduced business risk'}/>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextWidgetCard listItem={'Release & Upgrade Management'} point1={'Phenom release impact analysis'} point2={'Regression testing & validation'} point3={'Controlled deployment support'} point4={''} cardBottomHead={'Outcome:'} cardBottomText={'Confident releases with minimal disruption'}/>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextWidgetCard listItem={'Quality Assurance & Platform Stability'} point1={'Ongoing regression testing'} point2={'Integration and workflow validation'} point3={'Automation test support'} point4={''} cardBottomHead={'Outcome:'} cardBottomText={'Reliable, enterprise-ready platform performance'}/>
            </Grid>
            <Grid item size={{ xs: 12, md: 6}}>
              <TextWidgetCard listItem={'Platform Optimization & Enhancements'} point1={'Continuous improvements & enhancements'} point2={'Feature enablement & configuration updates'} point3={'Performance and usability optimization'} point4={''} cardBottomHead={'Outcome:'} cardBottomText={'Higher adoption and better ROI from Phenom'}/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
    }

    export default TextWidgetMS;