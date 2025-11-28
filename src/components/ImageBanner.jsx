import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"


const ImageBanner = ({title, text, btnText, widgetImg}) => {
      const animateRef = useRef(null)
      const animateRef1 = useRef(null)
      const animateRef2 = useRef(null)
      const animateRef3 = useRef(null)
          useGSAP(() => {
              gsap.to(animateRef.current, {x:0, duration: 2, ease: 'fade.in',})
              gsap.to(animateRef1.current, {opacity:1, duration: 2.5, ease: 'fade.in'})
              gsap.to(animateRef2.current, {opacity:1, duration: 2.7, ease: 'fade.in',})
              gsap.to(animateRef3.current, {opacity:1, duration: 2.7, ease: 'fade.in',})
              
          },  {})
  return (
    <Box sx={{ backgroundColor: '#fff', py: 8,                   
      // Responsive styles using breakpoints
            '@media (max-width: 767px)': { // md breakpoint
              py:4
            }, 
            }}>
      <Container>
        <Grid container spacing={{ xs: 4, sm: 4, md: 8 }} alignItems="center">
          <Grid item size={{ xs: 12, md: 6 }} order={{ md: 1, xs:21 }}>
            <Box
              component="img"
              ref={animateRef3}
              src={widgetImg}
              alt="Banner illustration"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)', 
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
                  },
                }}
            />
          </Grid>
          <Grid item xs={12} md={6} size={{ xs: 12, md: 6 }} order={{ md: 1, xs: 1 }}>
            <Typography ref={animateRef} variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold', transform: 'translateX: -20px'}}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ mb:3, color: 'text.secondary' }}>
              {text}
            </Typography>
            <Button variant="contained" color="primary">
              {btnText}
            </Button>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default ImageBanner;
