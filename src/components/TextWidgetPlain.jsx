
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
import { useNavigate } from 'react-router';

    function TextWidgetPlain({title, subTitle, text, listItem, point1, point2, point3, point4, cardBottomHead, cardBottomText, btnTxt}) {
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
      <Box sx={{ background: `url(${abstractBglinesImg})`, py: 8, 
                  // Responsive styles using breakpoints
            '@media (max-width: 767px)': { // md breakpoint
              py:4
            },
        }}>
        <Container>
          <Grid container spacing={8} alignItems="center">
            <Grid item size={{ xs: 12, md: 12 }}>
              <Typography ref={animateRef} variant="h4" component="h3" gutterBottom sx={{ fontWeight: '700',
              transform: 'translateX(-20px)', textAlign: 'center'}}>
                {title}
              </Typography>
            </Grid>
            {/* Image Column */}
            <Grid item size={{ xs: 12, md: 4 }}>
              {subTitle && <Typography variant="h6" component="h5" sx={{ mb:1, color: 'text.primary', fontWeight: '500'}}>
                {subTitle}
              </Typography>
              }
              <Typography ref={animateRef1} variant="body1" sx={{ mb:2, color: 'text.secondary', opacity: 0}}>
                {text}
              </Typography>
              {
                btnTxt && <Button variant="contained" color="primary" onClick={() => navigate('/contact')}>{btnTxt}</Button>
              }
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
            {/* Text Column */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Typography variant="body1" sx={{ mb:0, mt:2, color: 'text.primary', fontWeight: '500'}}>
                {"Screening & Matching"}
              </Typography>
                <List sx={{ listStyleType: 'disc', mb:2 }}>
                    {point1 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {"AI-based candidate ranking"}
                      </ListItem>
                    }
                    {point2 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {"Smart shortlisting & routing"}
                      </ListItem>
                    }
                    {point3 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {"Reduced manual screening"}
                      </ListItem>
                    }
                </List>
              <Typography variant="body1" sx={{ mb:0, mt:2, color: 'text.primary', fontWeight: '500'}}>
                {cardBottomHead}
              </Typography>
              <Typography variant="body1" sx={{ mb:0, mt:0, color: 'text.secondary', fontWeight: '400'}}>
                {"Faster, higher-quality pipelines"}
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Typography variant="body1" sx={{ mb:0, mt:2, color: 'text.primary', fontWeight: '500'}}>
                {"Recruiter Productivity"}
              </Typography>
                <List sx={{ listStyleType: 'disc', mb:2 }}>
                    {point1 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {"AI-recommended actions"}
                      </ListItem>
                    }
                    {point2 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {"Automated follow-ups & reminders"}
                      </ListItem>
                    }
                    {point3 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {"Intelligent alerts & insights"}
                      </ListItem>
                    }
                </List>
              <Typography variant="body1" sx={{ mb:0, mt:2, color: 'text.primary', fontWeight: '500'}}>
                {cardBottomHead}
              </Typography>
              <Typography variant="body1" sx={{ mb:0, mt:0, color: 'text.secondary', fontWeight: '400'}}>
                {"Recruiters focus on hiring, not admin work"}
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Typography variant="body1" sx={{ mb:0, mt:2, color: 'text.primary', fontWeight: '500'}}>
                {"Workflow Automation"}
              </Typography>
                <List sx={{ listStyleType: 'disc', mb:2 }}>
                    {point1 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {"Event-based workflow triggers"}
                      </ListItem>
                    }
                    {point2 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {"ATS & CRM automation"}
                      </ListItem>
                    }
                    {point3 && <ListItem variant='body1' component='p' sx={{ mb:0,p:0, color: 'text.secondary',}}>
                        <RadioButtonCheckedIcon  fontSize='5px' sx={{mr:1}}/> {"Exception handling"}
                      </ListItem>
                    }
                </List>
              <Typography variant="body1" sx={{ mb:0, mt:2, color: 'text.primary', fontWeight: '500'}}>
                Outcome:
              </Typography>
              <Typography variant="body1" sx={{ mb:0, mt:0, color: 'text.secondary', fontWeight: '400'}}>
                Consistent, scalable hiring operations
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
    }

    export default TextWidgetPlain;