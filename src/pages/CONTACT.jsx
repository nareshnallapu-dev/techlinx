import React from 'react'
import Swal from 'sweetalert2'
import { useState } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Layout from '../Layout/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { Box, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AbstractBg from '../assets/abstract_bg.jpg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import EmailIcon from '@mui/icons-material/Email';
import LocationWidget from '../components/locationWidget';
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const Contact = () => {
  const emailLink = <a style={{color:'#0009'}} href="mailto:support@techlinx.ai">support@techlinx.ai</a>

        const animateRef = useRef(null)
        const animateRef1 = useRef(null)
        const animateRef2 = useRef(null)
        const animateRef3 = useRef(null)
            useGSAP(() => {
                gsap.to(animateRef.current, {opacity:1, duration: 2, ease: 'fade.in',})
                gsap.to(animateRef1.current, {opacity:1, duration: 2.2, ease: 'fade.in'})
                gsap.to(animateRef2.current, {opacity:1, duration: 2.3, ease: 'fade.in',})
                gsap.to(animateRef3.current, {opacity:1, duration: 2.4, ease: 'fade.in',})
                
            },  {})

  const {register, reset, handleSubmit} = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [setResult] = useState(null);

  const accessKey = "bfeb9b3d-1cfc-4ebd-9da8-e84cf9aef968";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Techlinx",
      subject: "Contact form",
      // ... other settings
    },
    onSuccess: (msg) => {
      Swal.fire({
        title: "Good job!",
        text: "Email sent successfully!",
        icon: "success"
      });
      setIsSuccess(true);
      console.log(isSuccess);
      
      setResult(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
      console.log(msg);
      
    },
  });
  return <>
    <Layout>
      <Breadcrumb currentPage={'Contact Us'}/>
      <Box sx={{background: `url(${AbstractBg})`, py:8}}>
        <Container>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <Typography ref={animateRef} variant='h4' component='h5' sx={{ fontWeight: 'bold', opacity:0 }} gutterBottom>
                Let’s Connect
              </Typography>
              <Typography ref={animateRef1} sx={{ opacity:0}} variant='h5' component='h4' gutterBottom>Want to step further?
                We’d love to hear from you.</Typography>
                <Typography variant='body2' sx={{ mt:2, color: 'text.secondary' }}>
                <List>
                    <ListItem ref={animateRef2} sx={{opacity:0}}>
                      <ListItemIcon>
                        <LocationPinIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Address:"
                        secondary="6th floor, White Field Rd, Laxmi Cyber City, Whitefields, HITEC City, Kondapur, Telangana 500081."
                      />
                    </ListItem>
                    <ListItem ref={animateRef3} sx={{opacity:0}}>
                      <ListItemIcon>
                        <EmailIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Email:"
                        secondary={emailLink}
                      />
                    </ListItem>
                </List>          
                </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
                  <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '98%', maxWidth: '100%' } }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Grid container spacing={(2, 1)}>
                      <Grid size={{ xs: 12, md: 6, sm:12 }}>
                          <TextField multiline maxRows={2} {...register("First Name", { required: "First name is required",
          maxLength: 80, })} id="standard-basic" fullWidth label="First Name" placeholder="First Name" variant="standard" required/>
                                  
                      </Grid>
                      <Grid size={{ xs: 12, md: 6, sm:12 }}>
                          <TextField multiline maxRows={2} {...register("Last Name", { required: "Last name is required",
          maxLength: 80, })} id="standard-basic" label="Last Name" placeholder="Last Name" variant="standard" required/>
                      </Grid>
                      <Grid size={{ xs: 12, md: 6, sm:12 }}>
                          <TextField
                            id="standard-suffix-shrink"
                            label="Email"
                            placeholder="Email"
                            {...register("email", {       required: "Enter your email",
                                pattern: {
                                  value: /^\S+@\S+$/i,
                                  message: "Please enter a valid email",
                                },
                              },)}
                            variant="standard"
                            required
                              />
                              
                      </Grid>
                      <Grid size={{ xs: 12, md: 6, sm:12 }}>
                          <TextField multiline maxRows={2} type='number' {...register("phone", { required: true })} id="standard-basic" fullWidth label="Phone Number" placeholder="Phone number" variant="standard" inputProps={{ inputMode: 'numeric' }} required/>
                      </Grid>
                      <Grid size={{ xs: 12, md: 12, sm:12 }}>
                          <TextField
                            id="standard-basic"
                            {...register("message", { required: false })}
                            variant="standard"
                            label="Message"
                            placeholder="Message"
                            multiline
                          />
                      </Grid>
                       <Grid size={{ xs: 12, md: 12, sm:12 }}>
                        <Button type="submit" variant="contained">Submit</Button>
                       </Grid>
                    </Grid>
                  </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <LocationWidget/>
    </Layout>
  </>
}

export default Contact