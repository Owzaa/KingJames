import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import { Box, Grid, Paper, Typography } from '@mui/material/';

//Industries: Styling
import './IndustryStyling.css'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 290,
    height: 'auto'

}));



export default function Industries() {

    return (

       
        <Box container sx={{
           
            background: '#FAFAFA',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <div className="aboutContainer">
                <div className="container" id="divStyle">

                    <Typography
                        variant="h6"
                        id="brandTitle">
                        <div id="rectAngular"></div>
                        What we do



                    </Typography>
                    <h5 className="subHeader">
                    We offer a complete range of bespoke design and development
                    services to help you turn your ideas into digital masterpieces
                    </h5>
                </div>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 6, sm: 8, md: 12 }}>

                    <Grid item>
                        <Item>
                            <img src="./images/icons/webIcon.svg" alt="web_Icon" />
                            <h3
                                id="industryTitle">Web Development</h3>

                            <Typography>
                            We use cutting-edge web development technologies
                            to help our clients fulfill their business goals
                            through functional, reliable solutions.
                            </Typography>
                        </Item>

                    </Grid>

                    <Grid item>

                        <Item>
                            <img src="./images/icons/FrontIcon.svg" alt="web_Icon" />
                            <h3
                                id="industryTitle">User Experience & Design</h3>
                            <Typography>
                            Our complete web design services will bring your ideas to life
                            and provide you with a sleek, high-performing product that elevates your business.
                            </Typography>
                        </Item>
                    </Grid>

                    <Grid item>
                        <Item>
                            <img src="./images/icons/AppIcon.svg" alt="web_Icon"/>
                            <h3
                                id="industryTitle">Mobile app development</h3>
                            <Typography>
                            Our extensive mobile development experience allows us to create custom native and
                            cross-platform iOS and Android mobile solutions for our clients.
                            </Typography>

                        </Item>
                    </Grid>

                    <Grid item>
                        <Item>
                            <img src="./images/icons/blockIcon.svg" alt="blockIcon" />
                            <h3
                                id="industryTitle">Blockchain Solution</h3>
                            <Typography>
                            We conduct market research to determine the optimal blockchain-based solutions to help
                            you grow your company and achieve your business goals.
                        </Typography>
                       </Item>
                    </Grid>

                </Grid>

            </div>

        </Box>
    );
}

