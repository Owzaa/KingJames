import * as React from "react";

// Library
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/material";

//Imported: Pages
import HeaderPage from './pages/Header/Header';
import HeroPage from "./pages/Hero/HeroPage";
import FooterPage from './pages/Footer/Footer';
import IndustryPage from "./pages/Industries/IndustryPage";
import BrandPage from "./pages/Brands/Brands";
import CasesPage from "./pages/Cases/CasesPage";




function App() {
    return (

        <>


            <CssBaseline/>
            <section className="headerSection">
            <HeaderPage />
            </section>             

            <section className="heroSection">
            <HeroPage/>
            </section> 


            <section className="industrySection">
            <IndustryPage/>
            </section> 


            <section className="caseSection">
            <CasesPage/>
            </section>    



            <section className="brandsSection">
            <BrandPage/>
            </section>    





            <section className="footerSection">
            <FooterPage />
            </section>
               
           
       </>
    );
}

export default App;
