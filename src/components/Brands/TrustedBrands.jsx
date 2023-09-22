import {
    Box, Typography, Grid,Paper
} from '@mui/material/';

import { experimentalStyled as styled } from '@mui/material/styles';


// Brand: Styling
import './BrandStyling.css'





// Brand List
const itemData =[
    {
        img: '../../images/visa-black.svg',
        title: 'Visa',
     
    },
    {
        img: '../../images/tyme-bank-black.svg',
        title: 'Tyme-Bank'
    },
    {
        img: '../../images/distell-black.svg',
        title: 'Distell'
    },

    {
        img: '../../images/microsoft-black.svg',
        title: 'Microsoft'
    },

    {
        img: '../../images/engen-black.svg',
        title: 'Engen'
    },
    {
        img: '../../images/nike-black.svg',
        title: 'Nike'
    },
    {
        img: '../../images/wesgrow-black.svg',
        title: 'Wesgrow'
    },
    {
        img: '../../images/multichoice-black.svg',
        title: 'Multichoice'
    },
    {
        img: '../../images/pnp-black.svg',
        title: 'Pick n Pay'
    },


    {
        img: '../../images/liquid-black.svg',
        title: 'Liquid'
    },
    {
        img: '../../images/tfg-black.svg',
        title: 'TFG'
    },
    {
        img: '../../images/sanlam-black.svg',
        title: 'Sanlam'
    },
    {
        img: '../../images/santam-black.svg',
        title: 'Santam'
    },
    {
        img: '../../images/bbc-black.svg',
        title: 'BBC'
    },

]


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 250,
    height: 120
}));


export const TrustedBrands = () => {


    return (



        <div className="container">
            <Typography
                variant="h6"
                id="brandTitle">
                <div id="rectAngular"></div>  You'l be in good company
                
            

            </Typography>


            <h1> Trusted by leading brands</h1>
       
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{
                    xs: 2,
                    md: 4
                }} columns={{ xs: 4, sm: 8, md: 12}}>
                    {itemData.map((itemData) => (
                        <Grid container
                            item xs={2} sm={4} md
                            key={itemData}>
                            
                          <img
                                    srcSet={`${itemData.img}`}
                                    src={`${itemData.img}`}
                                    alt={itemData.title}
                                    loading="lazy"
                            />

                             
                        </Grid>
                    ))}
                </Grid>
            </Box>






        </div>






    );



}

