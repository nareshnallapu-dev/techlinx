
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

    function TextWidgetCard({listItem, point1, point2, point3, point4, cardBottomHead, cardBottomText}) {


          const animateRef = useRef(null)
          const animateRef1 = useRef(null)
          const animateRef2 = useRef(null)
          useGSAP(() => {
              gsap.to(animateRef.current, { x: 0, duration: 2, ease: 'fade.in',})
              gsap.to(animateRef1.current, {opacity:1, duration: 2.2, ease: 'fade.in'})
              gsap.to(animateRef2.current, {opacity:1, duration: 2.5, ease: 'fade.in',})
          },  {})
          
    return (
      <Box sx={{ background: `transparent`, py: 0, 
                  // Responsive styles using breakpoints
            '@media (max-width: 767px)': { // md breakpoint
              py:0
            },
        }}>
        <Container>
          <Grid container spacing={0} alignItems="baseline">
            {/* Image Column */}
            <Grid item size={{ xs: 12, md: 12 }}>
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
                </List>
              <Typography variant="body1" sx={{ mb:0, mt:2, color: 'text.primary', fontWeight: '500'}}>
                {cardBottomHead}
              </Typography>
              <Typography variant="body1" sx={{ mb:0, mt:0, color: 'text.secondary', fontWeight: '400'}}>
                {cardBottomText}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
    }

    export default TextWidgetCard;