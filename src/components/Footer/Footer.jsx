import * as React from "react";


import { styled } from '@mui/material/styles';
import { Grid, Box, Paper, Typography } from "@mui/material/";



// Import: Styling
import './FooterStyle.css'




// Item style
const Item = styled(Paper)(({ theme }) => ({
    background: '#70259B',
    ...theme.typography.paragrah,
    padding: theme.spacing(6),
    textAlign: 'center',
    color: '#fff'
}));



// Footer Function
const Footer = () => {


    return (

        
            <footer>

                <Box sx={{ flexGrow: 2}}>


                    <div  id="footer-container">

                        <span id="contact">
                           Contact us 
                        </span>


                    <Grid container spacing={0}
                        columns={16}>


                        <Grid item xs={12}>
                         
                                <h1>  Have a project in mind?
                                    Let's make it happen </h1>
                        


                            </Grid>


                        <Grid item xs={4}>
                         

                                   Street Name, Suburb, 8000  
                                        

                                        Cape Town, South Africa
                                        

                                        +27 21 431 0001
                                        

                                        <a href="enquirie@website.co.za">
                                            enquirie@website.co.za
                                        </a>
                                    

                            </Grid>
                        </Grid>
                    </div>


                    {/*
                Bottom footer container:
            */}



                    <div className="container" id="bottomFooterContainer">

                    <Grid container spacing={4}
                        gap={4}
                    columns={16}>

                        <Grid item xs={3}>
                        
                                <p>
                                    Terms of service Privacy policy Impressum
                                </p>
                           

                        </Grid>


                        <Grid item xs={3}>
                      

                                <p>
                                    Facebook <br/>
                                    Instagram <br/>
                                    Twitter
                                </p>

                            </Grid>

                        <Grid item xs={3}>
                    
                                <p>
                                    Github <br/>
                                    Linkedin <br/>
                                    Teams <br/>
                                </p>
                   
                            </Grid>

                        <Grid item xs={3}>
                         
                                <Typography>
                                    Youtube <br/>
                                    Behance <br/>
                                    Dribbble
                                </Typography>

                  
                            </Grid>
                        </Grid>
                    </div>



                </Box>

            </footer>

        

    );
};


export default Footer;