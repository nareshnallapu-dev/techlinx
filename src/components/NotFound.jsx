    import { Container, Grid, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const Navigate = useNavigate()
  return <>
      <Box sx={{ background: `#fff`, height:'100vh', width:'100%', textAlign:'center', py: 8, display: 'flex', alignContent:'center', justifyContent:'center',alignItems:'center',
                  // Responsive styles using breakpoints
            '@media (max-width: 767px)': { // md breakpoint
              py:4
            },
        }}>
        <Container>
          <Grid container spacing={2}>
            {/* Text Column */}
            <Grid item size={{ xs: 12, md: 12 }}>
              <Typography variant="h2" component="h3" gutterBottom sx={{ fontWeight: '700'}}>
                404
              </Typography>
              <Typography variant="h5" sx={{ mb:2, color: 'text.primary'}}>
                Page Not Found!
              </Typography>
              <Button variant="outlined" onClick={()=> Navigate('/')} sx={{ mt:1}}> Go Back To Home Page</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
  </>
}

export default NotFound;