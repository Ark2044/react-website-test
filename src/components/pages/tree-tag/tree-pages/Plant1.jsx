import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';


function Plant1() {
    return (
        <div className="Plant-1">
            
            <div className="plant-container">
                
                <div className="home-button">
                <Link
                    to="/tree_tag_main">
                    <HomeIcon className="home" sx={{ fontSize: 50, color: 'darkgreen' }} />

                </Link>
                
            </div>
                


                <Card className="plant-card" style={{ width: '18rem' }}>
                    <Card.Img className="plant-img" variant="top" src="/images/logos/plant.jpeg" />
                    <Card.Body>
                        <Card.Title>Crown-of-thorns</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                <div className="plant-name">
                    <h2>Common Name : Crown-of-thorns</h2>
                    <br />
                    <h2>Botanical Name :  Euphorbia Milli</h2>
                </div>
            </div>
            <div className="plant-info">
                <hr></hr>
                <h1>Information</h1>
                <p>
                Crown of thorns is a hardy perennial with stout gray thorns and oval leaves that drop as they age. The sprawling, branching, vinelike stems can attain lengths of more than two metres (seven feet), though potted plants are considerably smaller. The small inconspicuous flowers are borne in paired clusters and are surrounded by two showy light red bracts (leaflike structures attached just below flowers). Various forms are available with yellow or deep red bracts. The white milky sap is poisonous and can cause skin and eye irritation.
                </p>
                <h2> For More Info - <a href='https://www.google.com/search?q=Euphorbia%20Milli'>Visit here</a></h2>
                <hr></hr>
            </div>
            <div className='campus-loc'>
                <img src='/images/logos/maps.gif' className='loc-gif'></img>
                <h2>Where else to find on Campus</h2>
                <h4>Stairs</h4>
                <br></br>
            </div>
        </div >
    );
}

export default Plant1;