import React from 'react';
import Header from '../../header.js';
import Footer from '../../footer.js';
import DskImg from '../Contact/imagesOfOwner/dsk.jpg';
import NimishImg from '../Contact/imagesOfOwner/nimish.jpeg';
import AbhijitImg from '../Contact/imagesOfOwner/abhi.jpeg';
import DNALogo from '../../assets/logo.png';
import { Grid } from '@material-ui/core';

export default function AboutUs(){
    return (
        <>
            <Header />
            <div >
          {/*
      Urban by TEMPLATED
      templated.co @templatedco
      Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
  */}
       
          {/* Nav */}
         
          {/* Banner */}
          <section id="banner" style={{backgroundColor:'#ff084e'}}>
            <div className="inner">
              <header>
                <h1>This is DNA Match</h1>
                <p>Our purpose at Cents of Style is to empower women to lead bold and full lives. We believe that if you look good, you feel good. And when you feel good you can do good for others around you. Cents of Style brings you a wide range of trendy shoes, beautiful scarves, and statement-making jewelry, all at affordable prices to make them accessible to you.</p>
              </header>
              
            </div>
          </section>
          {/* Main */}
          <div id="main">
            {/* Section */}
            <section className="wrapper style1">
              <div className="inner">
                {/* 2 Columns */}
                <Grid container>
                  <Grid xs={12} sm={12} md={6} lg={6} xl={6}>

                      <a href="/" className="link"><img width={350}  src={DNALogo} alt="" /></a>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                    <h3>Maecenas a gravida quam</h3>
                    <p>Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.</p>
                    <p>Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex. </p>
                    

                  </Grid>
                </Grid>
              
              </div>
            </section>
            {/* Section */}

            {/* Section */}
            <section className="wrapper style1">
              <div className="inner">
                <header className="align-center">
                  <h2>Meet our Leaders</h2>
                  
                </header>
                <div className="flex flex-3">
                  <div className="col align-center">
                    <div className="image round fit">
                      <img src={DskImg} alt="" />
                    </div>
                    <p>To succeed in an environment of growth and excellence and earn a job which provides me job satisfaction
and self-development and help me to achieve personal as well as organizational goals.</p>
                    
                  </div>
                  <div className="col align-center">
                    <div className="image round fit">
                      <img src={NimishImg} alt="" />
                    </div>
                    <p>Tech enthusiast with will to try out new things without hesitation. Linux lover. Loves to try out new
Operating Systems/ROMs/kernels on mobile and laptop. Full stack Web Developer. Competitive Coder.</p>
                    
                  </div>
                  <div className="col align-center">
                    <div className="image round fit">
                      <img src={AbhijitImg} alt="" />
                    </div>
                    <p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
                    
                  </div>
                 
                </div>
                <div className="flex flex-row">
                <div className="flex-1">

                </div>
                <a href="/contactus" className="button">Learn More</a>
                <div className="flex-1">

                </div>
                </div>
                
              </div>
            </section>
          </div>
          {/* Footer */}
          
          {/* Scripts */}
        </div>
        <Footer />
        </>
    );
}
