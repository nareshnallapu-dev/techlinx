
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
import { useNavigate } from 'react-router';

    function ImgTextWidgetTwo({title, subTitle, text, ImgBanner, listItem, point1, point2, point3, point4, point5, cardBottomHead, cardBottomText, btnTxt}) {

          const navigate = useNavigate()
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
          <Grid container spacing={2} alignItems="center">
            {/* Text Column */}
            <Grid item size={{ xs: 12, md: 7 }}>
              <Typography ref={animateRef} variant="h4" component="h3" gutterBottom sx={{ fontWeight: '700',
              transform: 'translateX(-20px)'}}>
                {title}
              </Typography>
              {subTitle && <Typography variant="h6" component="h5" sx={{ mb:1, color: 'text.primary', fontWeight: '500'}}>
                {subTitle}
              </Typography>
              }
              <Typography ref={animateRef1} variant="body1" sx={{ mb:0, color: 'text.secondary', opacity: 0}}>
                {text}
              </Typography>
              <Typography variant="body1" sx={{ mb:0, mt:2, color: 'text.primary', fontWeight: '500'}}>
                {listItem}
              </Typography>
                <List sx={{ listStyleType: 'disc', mb:2 }}>
                    {point1 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {point1}
                      </ListItem>
                    }
                    {point2 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {point2}
                      </ListItem>
                    }
                    {point3 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {point3}
                      </ListItem>
                    }
                    {point4 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {point4}
                      </ListItem>
                    }
                    {point5 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {point5}
                      </ListItem>
                    }
                </List>
              <Typography variant="body1" sx={{ mb:0, mt:2, color: 'text.primary', fontWeight: '500'}}>
                {cardBottomHead}
              </Typography>
              <Typography variant="body1" sx={{ mb:2, mt:0, color: 'text.secondary', fontWeight: '400'}}>
                {cardBottomText}
              </Typography>
              {
                btnTxt && <Button variant="contained" color="primary" onClick={() => navigate('/contact')}>{btnTxt}</Button>
              }
            </Grid>

            {/* Image Column */}
            <Grid item size={{ xs: 12, md: 5 }}>
              <Box
                component="img"
                src={ImgBanner}
                alt="Techlinx + Phenom + ATS + CRM"
                loading="lazy"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: 0,
                  mixBlendMode: 'multiply',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1)', 
                    boxShadow: '0px 4px 8px transparent', 
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
    }

    export default ImgTextWidgetTwo;