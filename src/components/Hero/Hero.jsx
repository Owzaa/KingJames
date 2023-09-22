import {Box, Button, Typography } from '@mui/material/';


//Hero: Styling
import './HeroStyling.css'




const Hero = () => {
    return (
        <Box sx={{
            backgroundImage: 'url(./images/confidence.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: 600,
            
         
            }}
        >

            <div className="heroContainer">
                <div className="headerContainer">
                    <title className="heroTitleHeader">
                    Live with Confidence
                    </title>
                </div>


                <div className="subheaderContainer"> 
                    <p className="subTitleHeader">
                    Jose Mourinho brings confidence to
                    pan-African Sanlam campaign.
                    </p>    

                   
                </div>

                <div className="projectContainer"> 

                    <button id="projectView" >
                        <a href="/projects" >
                        View Project
                        </a>
                    </button>  
                </div>
             
              
            </div>

        </Box>
    );
}

export default Hero;