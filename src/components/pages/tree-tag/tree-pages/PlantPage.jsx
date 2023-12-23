// PlantPage.jsx

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PlantInfo from './PlantInfo';
import PlantData from './PlantData';
import Navbar from '../../../Navbar';

function PlantPage() {
    const { index } = useParams();
    const navigate = useNavigate();

    // Convert index to a number
    const plantIndex = (-1 + parseInt(index, 10));

    // Assuming you have the plant data array available
    const plantDataArray = PlantData;

    // Check if the index is valid
    if (isNaN(plantIndex) || plantIndex < 0 || plantIndex >= plantDataArray.length) {
        // Redirect to a default page or handle invalid index
        navigate('/'); // Redirect to home for example
        return null;
    }

    const plantData = plantDataArray[plantIndex];

    return (
        
       
        <PlantInfo plantData={plantData} />
        
    );
}

export default PlantPage;
