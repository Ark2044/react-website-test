// // PlantInfo.jsx

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';

// function PlantInfo({ plantData }) {
//     const { commonName, botanicalName, imageSrc, description, googleLink, campusLocation } = plantData;

//     return (
//         <div className="Plant-1">
//             <div className="plant-container">
//                 {/* <div className="home-button">
//                     <Link to="/tree_tag_main">
//                         <HomeIcon className="home" sx={{ fontSize: 50, color: 'darkgreen' }} />
//                     </Link>
//                 </div> */}
//                 <br></br>
//                 <br></br>
//                 <Card className="plant-card" style={{ width: '18rem' }}>
//                     <Card.Img className="plant-img" variant="top" src={imageSrc} />
//                     <Card.Body>
//                         <Card.Title>{commonName}</Card.Title>
//                     </Card.Body>
//                 </Card>

//                 <div className="plant-name">
//                     <h2>Common Name: {commonName}</h2>
//                     <br />
//                     <h2>Botanical Name: {botanicalName}</h2>
//                 </div>
//             </div>

//             <div className="plant-info">
//                 <hr></hr>
//                 <h1>Information</h1>
//                 <p>{description}</p>
//                 <h2> For More Info - <a href={googleLink}>Visit here</a></h2>
//                 <hr></hr>
//             </div>

//             <div className='campus-loc'>
//                 <img src='/images/logos/maps.gif' className='loc-gif' alt="Location Gif"></img>
//                 <h2>Where else to find on Campus</h2>
//                 <h4>{campusLocation}</h4>
//                 <br></br>
//             </div>
//         </div>
//     );
// }

// export default PlantInfo;

import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Container, Divider, Grid, createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { lightGreen } from '@mui/material/colors';


function PlantInfo({ plantData }) {
    const Font = styled('div')({
        fontFamily: 'Pacifico',
        fontSize: '25px'
      });

    const { commonName, botanicalName, imageSrc, description, googleLink, campusLocation } = plantData;

    return (
        // <div className="Plant-1">
            <Box width={'100%'}  sx={{bgcolor:'lightGreen'}}>
                {/* <div className="plant-container"> */}


                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{marginBottom: '30px'}}>
                    <Grid item xs={12} md={6} justifyContent="center" alignItems="center" mt={'50px'}>
                        <Card sx={{ maxWidth: 300 , marginLeft: 40 ,
                                     '@media (max-width: 900px)': {
                        
                                        marginLeft: '50px',
                                      },
                        }} justifyContent="center" >
                            <CardMedia
                                component="img"
                                alt={commonName}
                                height="250"
                                image={imageSrc}

                            />
                            <CardContent>
                                <Typography variant="h5" component="div" >
                                    {commonName}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* <div className="plant-name"> */}
                    <Grid item xs={12} md={6}>
                        <Font variant="h6" gutterBottom>
                            Common Name: {commonName}
                        </Font>
                        <Font variant="h6">
                            Botanical Name: {botanicalName}
                        </Font>
                        {/* </div> */}
                    </Grid>
                </Grid>
                {/* </div> */}
                <Divider orientation="horizontal" variant="fullWidth" sx={{ color: 'brown' }} />
                {/* <div className="plant-info"> */}


                <Container sx={{ marginTop: '30px' }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        align="center"
                        color="text.primary">
                        Information
                    </Typography>
                    <Typography
                        variant="body1"
                        align="justify"
                        paragraph>
                        {description}
                    </Typography>
                    <Typography variant="h5">
                        For More Info - <a href={googleLink}>Visit here</a>
                    </Typography>
                    <hr />
                    {/* </div> */}
                </Container>
                <Divider orientation="horizontal" variant="fullWidth" sx={{ color: 'brown' }} />
                <div className='campus-loc' style={{marginTop: '30px'}}>
                
                    <img 
                    src='/images/logos/maps.gif' 
                    className='loc-gif' 
                    alt="Location Gif"
                    style={{ width: '250px',
                            height: '250px',
                            marginBottom: '30px' 
                            
                            }}></img>
                    <Typography variant="h4" gutterBottom>
                        Where else to find on Campus
                    </Typography>
                    <Typography variant="h6">
                        {campusLocation}
                    </Typography>
                    <br />
                </div>
            </Box>
        // </div >
    );
}

export default PlantInfo;

