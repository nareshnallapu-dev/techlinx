import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import bannerMain from '../assets/abstract_bg.jpg'
import PlanningImg from '../assets/planning.png'
import developmentImg from '../assets/development.png'
import maintananceImg from '../assets/maintanance.png'
import ImgMediaCard from './ImgMediaCard';
import { Container } from '@mui/material';

    function Banner({head}) {
      return (
        <Box
          sx={{
            // Default styles for larger screens
            background: `black url(${bannerMain})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            height: 'auto', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'inherit',
            textAlign: 'center',
            py: 8,

            // Responsive styles using breakpoints
            '@media (max-width: 900px)': { // md breakpoint
              background: '#ddd',
              height: 'auto',
            },
            '@media (max-width: 600px)': { // sm breakpoint
              backgroundImage: 'url(path/to/small-banner-image.jpg)',
              height: 'auto',
              padding: 'auto', // Add some padding for smaller screens
              py: 6,
            },
          }}
        >
          <Container>
          <Typography variant="h4" component="h3" sx={{ mb: 6, fontWeight: 'bold' }}>
            {head}
          </Typography>
          <Grid container spacing={2} sx={{flexGrow: '1', display: 'flex',             
          '@media (max-width: 600px)': { // sm breakpoint
              px: 0,
            },}}>
            <Grid item size={{md:4, xs: 12}} sx={{display: 'flex'}}>
              <ImgMediaCard CardImg={PlanningImg} cardTitle={'Initiation & Planning'} cardText={'Empowering Innovation with Expert Implementation.'}/>
            </Grid>
            <Grid item size={{md:4, xs: 12}}>
              <ImgMediaCard CardImg={developmentImg} cardTitle={'Execution & Development'} cardText={'Transforming ideas into reality through seamless execution and development.'}/>
            </Grid>
            <Grid item size={{md:4, xs: 12}}>
              <ImgMediaCard CardImg={maintananceImg} cardTitle={'Testing & Maintenance'} cardText={'Ensuring excellence through rigorous testing and ongoing maintenance.'}/>
            </Grid>
          </Grid>
          </Container>
        </Box>
      );
    }

    export default Banner;