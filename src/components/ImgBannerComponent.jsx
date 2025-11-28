
    import AbstractBg from '../assets/abstract_bg.jpg'
    import { Container, Grid, Box, Typography, Button } from '@mui/material';
    import gsap from "gsap"
    import { useGSAP } from "@gsap/react"
    import { useRef } from "react"

    function ImgBannerComponent({title, text, btnText, ImgBanner}) {
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
              <Typography ref={animateRef1} variant="body1" sx={{ mb:3, color: 'text.secondary', opacity: 0}}>
                {text}
              </Typography>
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

    export default ImgBannerComponent;