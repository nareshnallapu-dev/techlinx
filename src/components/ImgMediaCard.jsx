import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({CardImg, cardTitle, cardText}) {
  return (
    
    <Card sx={{ maxWidth: 'auto', display: 'flex', flexDirection:'column', flexGrow:'1',transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)', 
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
                  }, }}>
      <CardMedia
        component="img"
        alt="Image here"
        height="180px"
        maxWidth='100%'
        image={CardImg}
        sx={{background: '#f0f0f0', objectFit:'contain'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: '600'}}>
          {cardTitle}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {cardText}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}