import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const PlantCard = ({ plant }) => {
  const { commonName, imageSrc, moreInfoLink } = plant;

  return (

    <Card
      sx={{ maxWidth: 345 } }
      justifyContent = "center"
      marginTop = "30px"
      alignItems="center"
    >
      <CardMedia
        
        component="img"
        alt={commonName}
        height="250"
        image={imageSrc}
      />
      <CardContent>
        <Typography variant="h5">{commonName}</Typography>
        <Typography variant="body2" color="text.secondary">
          {/* Add more information here if needed */}
        </Typography>
        <a href={moreInfoLink} target="_blank" rel="noopener noreferrer">
          More Info
        </a>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
