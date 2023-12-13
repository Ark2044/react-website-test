// src/pages/Home.jsx
import React from 'react';
import { Carousel } from '../Carousel';

function Home() {
  return (
    <div className='Home'>
      <div class="banner-gif animate__animated animate__backInDown animate__slower">
        {/* <video autoplay="" loop muted width="98%">
        <source src="\NSS-CRCE2.mp4" type="video/mp4"/>
      </video> */}
        {/* <img src="\Banner 2023-29.svg" alt="banner-gif"  width="97%"></img> */}
        <img src="\images\banner\Banner website.svg" alt="banner-gif" width="97%"></img>

      </div>
      <div className='about-us'>
        <h1>ABOUT US</h1>
        <p>
          The National Service Scheme(NSS) has been enthusiastically conducting activities to help people from the past 50 years. It was launched on Gandhiji's centenary year to continue
          his ideas of community service among the youth of our nation. NSS is a student association of the youth studying in university. We National Service Scheme Unit of Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai. With
          our team of 100 volunteers carry out our social responsibility by organizing and attending various event like Beach cleanups, Tree plantations, Crowd management, Awareness rallies and many more. NSS-CRCE has
          adopted a village for the period of 5 years at Tandulwadi, Saphale, Maharashtra.
        </p>
      </div>

      <hr></hr>
      <div className='prin'>
        <h1>FROM THE PRINCIPAL'S DESK</h1>
        <br></br>
        <div className='prin-img-p'>
          <div class="card">
            <img src="\images\logos\principal.jpg" alt="princ" width="450px"></img>
          </div>
          <p>NSS CRCE has been working with this spirit of mind, ever since its inception. Toggling between the
            rigours of professional studies, projects and development of technical skill sets, NSS CRCE members have
            always followed their passion to contribute their best to the service of society and moulding the
            younger generation with the right values and practices that takes care of Mother Earth and humanity at
            large. I have always been impressed by the numbers and range of activities taken up by the NSS CRCE
            chapter from developmental programmes for our Agnel Ashram kids to two blood donation camps every year,
            awareness drives on socially relevant issues, assisting the Mumbai Police in crowd management during
            festivals, clean up drives, tree planting, assistance in relief work during natural calamities to 7-day
            rural camp each year with one development activity for the benefit of the village, interaction with
            villagers and guiding sessions for children and youth.
            Best Wishes to our NSS CRCE chapter to continue their good work and motivate more students to get
            involved and work for socially relevant causes. Their 'You' before 'Me' attitude makes us proud that
            they hold the vision of our founding Fathers high.
          </p>
          
        </div>
        <h2>- Dr. Surendra Singh Rathod</h2>
      </div>
      <div className='flagship-text'><h1>Flagship Events</h1></div>
      <Carousel />

    </div>
  );
}

export default Home;
