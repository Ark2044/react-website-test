import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import plantData from './tree-pages/PlantData';
import PlantCard from './PlantCard';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

function Tree_Main() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Function to filter plants based on the selected category
    const getFilteredPlants = () => {
        if (!selectedCategory) {
            return plantData;
        }

        const filteredPlants = plantData
            .filter((plant) => {
                const locations = plant.campusLocation.split(',').map((location) => location.trim());
                return locations.includes(selectedCategory);
            });
            
        console.log('Filtered Plants:', filteredPlants);

        return filteredPlants;
    };

    useEffect(() => {
        setSelectedCategory(null);
    }, []);


    return (
        <div className="Tree-main" style={{ textAlign: 'center' }}>
            <div className="page-about">

                <Typography variant="h4">What is this page about?</Typography>
                {/* <p>
                    So this page is the project undertaken by NSS-CRCE under the guidance of Principal of CRCE Dr. Surendra Singh Rathod. Out motive is to educate the students about various Trees which are there in the college campus. For this we are using QR Codes through which the students can scan it and get the basic information of that particular Tree. The information contains the Botanical Name, About it, Location in Campus etc.
                </p> */}
                <Typography variant="h8" align="justify" margin="30px" color="text.primary" paragraph weight="medium">
                    So this page is the project undertaken by NSS-CRCE under the guidance of Principal of CRCE Dr. Surendra Singh Rathod. Out motive is to educate the students about various Trees which are there in the college campus. For this we are using QR Codes through which the students can scan it and get the basic information of that particular Tree. The information contains the Botanical Name, About it, Location in Campus etc.
                </Typography>
            </div>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 3, sm: 2, md: 4 }}
                justifyContent="center"
                margin={{ xs: '20px 0', sm: '20px 0', md: '30px 0' }}
            >
                <Box>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                            setSelectedCategory('Stairs');
                            console.log('Selected Category:', selectedCategory); // Log the selected category
                        }}>
                        Stairs <ArrowDropDownIcon />
                    </Button>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                            setSelectedCategory('Old Canteen');
                            console.log('Selected Category:', selectedCategory); // Log the selected category
                        }}>
                        Canteen <ArrowDropDownIcon />
                    </Button>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => setSelectedCategory('Church')} >
                        Church <ArrowDropDownIcon />
                    </Button>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                            setSelectedCategory('School Hall');
                            console.log('Selected Category:', selectedCategory); // Log the selected category
                        }}>
                        School Hall <ArrowDropDownIcon />
                    </Button>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                            setSelectedCategory('Basketball Court');
                            console.log('Selected Category:', selectedCategory); // Log the selected category
                        }}>
                        BasketBall Court <ArrowDropDownIcon />
                    </Button>
                </Box>
            </Stack>


            {/* Render PlantCard for each plant in the selected category */}
            {selectedCategory && (<Grid container spacing={2} justifyContent="center" alignItems="center">
                {getFilteredPlants().map((plant, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}
                        style={{
                            margin: '0 20px'
                        }}
                    >
                        <PlantCard plant={plant} />
                    </Grid>
                ))}
            </Grid>
            )}
        </div>
    );
}


export default Tree_Main;





