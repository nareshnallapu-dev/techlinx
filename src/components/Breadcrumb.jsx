import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Box, Container } from '@mui/material';
import breadCrumbBg2 from '../assets/breadcrumb_bg.jpg'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"


 const Breadcrumb = ({currentPage}) => {
          const animateRef = useRef(null)
          useGSAP(() => {
              gsap.to(animateRef.current, { duration: 2, ease: 'fade.in', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
          },  {})
          
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
        }
  return (
    <Box sx={{ background: `url(${breadCrumbBg2})`, backgroundPosition:'left', py: 6, 
          // Responsive styles using breakpoints
            '@media (max-width: 767px)': { // md breakpoint
              backgroundPosition:'right top',
              py:4
            },
    }}>
        <Container>
            <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ 
        "& ol": { 
          justifyContent: "center", 
          margin: "auto" 
        } 
      }}>
                {/* <Link underline="hover" color="inherit" to="/">
                Home
                </Link> */}
                <Typography variant='body1' ref={animateRef} sx={{fontWeight:'400', color: 'text.primary', clipPath: 'polygon(0% 0%, 100% 0, 100% 0%, 0% 0%)' }}>{currentPage}</Typography>
            </Breadcrumbs>
            </div>
        </Container>
    </Box>

  );
}
export default Breadcrumb;