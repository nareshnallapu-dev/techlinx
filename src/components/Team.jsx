import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import TeamImg from '../assets/favicon.jpeg'
import { Box, Container, Grid } from '@mui/material';
import teamData from '../utils/teamData.json'

export const TeamCard = ({name, role, image}) => {
    return <>
            <Box>
                <Grid container xs={{flexGrow: 1, py: 4}}>
                    <Grid item size={{md:12, xs:12}}>
                        <Card>
                            <CardActionArea component='div'>
                                <Typography>
                                    <img style={{width:'100%',maxHeight: 'auto', objectFit:'cover', aspectRatio: '7/8'}} src={image} alt="" />
                                </Typography>
                                {/* <CardMedia
                                component="img"
                                height="250px"
                                image={image}
                                alt="Profile Photo"
                                onError={TeamImg}
                                /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {role}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                                {/* <CardActions>
                                    <Button variant="contained" size="small" color="primary">
                                        LinkedIn
                            </Button>
                        </CardActions> */}
                    </Card>
                    </Grid>
                </Grid>
            </Box>
    </>
}

const Team = () => {
  return <>
        <Box sx={{py:8, background: '#fff'}}>
            <Container maxWidth='md'>
                <Grid container spacing={2} sx={{ flexGrow: 1,}}>
                    <Grid item sx={{justifyContent: 'center', alignContent:'center', textAlign: 'center' }} size={{xs:12, sm:12, md:12}}>
                        <Typography variant='h4' sx={{fontWeight: 'bold'}} gutterBottom>
                            Our Team
                        </Typography>
                        <Typography variant='body1' sx={{color: 'text.secondary', mb: '50px'}} gutterBottom>
                            Our team of expert consultants brings, on average, three decades of experience in talent strategy, operations, and technology.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{ flexGrow: 1 }}>
                    {teamData.data.map((team) => (
                        <Grid key={team.id} item size={{xs:12, sm:4, md:3}}>
                            <TeamCard name={team.name} role={team.role} image={team.image}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
  </>
}

export default Team