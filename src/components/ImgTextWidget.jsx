
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

    function ImgTextWidget({title, text, btnText, ImgBanner, point1, point2, point3}) {
          const animateRef = useRef(null)
          const animateRef1 = useRef(null)
          const animateRef2 = useRef(null)
          useGSAP(() => {
              gsap.to(animateRef.current, { x: 0, duration: 2, ease: 'fade.in',})
              gsap.to(animateRef1.current, {opacity:1, duration: 2.2, ease: 'fade.in'})
              gsap.to(animateRef2.current, {opacity:1, duration: 2.5, ease: 'fade.in',})
          },  {})
          
    return (
      <Box sx={{ background: `url(${AbstractBg})`, py: 8, 
                  // Responsive styles using breakpoints
            '@media (max-width: 767px)': { // md breakpoint
              py:4
            },
        }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            {/* Text Column */}
            <Grid item size={{ xs: 12, md: 7 }}>
              <Typography ref={animateRef} variant="h3" component="h3" gutterBottom sx={{ fontWeight: '700',
              transform: 'translateX(-20px)'}}>
                {title}
              </Typography>
              <Typography ref={animateRef1} variant="body1" sx={{ mb:0, color: 'text.secondary', opacity: 0}}>
                {text}
              </Typography>
                <List sx={{ listStyleType: 'disc', mb:2 }}>
                      <ListItem variant='body1' component='p' sx={{ mb:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px'/>&nbsp; {point1}
                      </ListItem>
                      <ListItem variant='body1' component='p' sx={{ mb:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px'/>&nbsp; {point2}
                      </ListItem>
                      <ListItem variant='body1' component='p' sx={{ mb:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px'/>&nbsp; {point3}
                      </ListItem>
                </List>
              <Button variant="contained" ref={animateRef2} color="primary" sx={{opacity: 0}}>
                {btnText}
              </Button>
            </Grid>

            {/* Image Column */}
            <Grid item size={{ xs: 12, md: 5 }}>
              <Box
                component="img"
                src={ImgBanner}
                alt="Banner illustration"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: 6,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)', 
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
    }

    export default ImgTextWidget;