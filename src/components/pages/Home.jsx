// src/pages/Home.jsx
import React, { useEffect } from "react";
import { Carousel } from "../Carousel";

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutUsSection = document.getElementById("about-us");
      const prinSection = document.getElementById("prin");
      const flagshipTextSection = document.getElementById("flagship-text");

      const scrollPosition = window.scrollY;

      const aboutUsThreshold =
        aboutUsSection.offsetTop - window.innerHeight / 2;
      const prinThreshold = prinSection.offsetTop - window.innerHeight / 2;
      const flagshipTextThreshold =
        flagshipTextSection.offsetTop - window.innerHeight / 2;

      if (
        scrollPosition > aboutUsThreshold &&
        !aboutUsSection.classList.contains("animate__fadeInUp")
      ) {
        aboutUsSection.classList.add(
          "animate__animated",
          "animate__fadeInUp",
          "animate__slower"
        );
      }

      if (
        scrollPosition > prinThreshold &&
        !prinSection.classList.contains("animate__fadeIn")
      ) {
        prinSection.classList.add(
          "animate__animated",
          "animate__fadeInUp",
          "animate__slower"
        );
      }

      if (
        scrollPosition > flagshipTextThreshold &&
        !flagshipTextSection.classList.contains("animate__fadeIn")
      ) {
        flagshipTextSection.classList.add(
          "animate__animated",
          "animate__fadeInUp",
          "animate__slower"
        );
      }

      // Reset animations if the elements are not in view
      if (scrollPosition < aboutUsThreshold) {
        aboutUsSection.classList.remove("animate__fadeInUp");
      }

      if (scrollPosition < prinThreshold) {
        prinSection.classList.remove("animate__fadeInUp");
      }

      if (scrollPosition < flagshipTextThreshold) {
        flagshipTextSection.classList.remove("animate__fadeInUp");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      <div class="banner-gif animate__animated animate__backInDown animate__slower">
        {/* <video autoplay="" loop muted width="98%">
        <source src="\NSS-CRCE2.mp4" type="video/mp4"/>
      </video> */}
        {/* <img src="\Banner 2023-29.svg" alt="banner-gif"  width="97%"></img> */}
        <img
          src="\images\banner\Banner website.svg"
          alt="banner-gif"
          width="97%"
        ></img>
      </div>

      <div id="about-us" className="about-us">
        <h1>ABOUT US</h1>
        <p>
          The National Service Scheme(NSS) has been enthusiastically conducting
          activities to help people from the past 50 years. It was launched on
          Gandhiji's centenary year to continue his ideas of community service
          among the youth of our nation. NSS is a student association of the
          youth studying in university. We National Service Scheme Unit of Fr.
          Conceicao Rodrigues College of Engineering, Bandra, Mumbai. With our
          team of 100 volunteers carry out our social responsibility by
          organizing and attending various event like Beach cleanups, Tree
          plantations, Crowd management, Awareness rallies and many more.
          NSS-CRCE has adopted a village for the period of 5 years at
          Tandulwadi, Saphale, Maharashtra.
        </p>
      </div>

      <hr className="animate__animated animate__fadeIn" />

      <div id="prin" className="prin">
        <h1>FROM THE PRINCIPAL'S DESK</h1>
        <br></br>

        <div className="prin-img-p">
          <div class="card">
            <img
              src="\images\logos\principal.jpg"
              alt="princ"
              width="450px"
            ></img>
          </div>

          <p>
            NSS CRCE has been working with this spirit of mind, ever since its
            inception. Toggling between the rigours of professional studies,
            projects and development of technical skill sets, NSS CRCE members
            have always followed their passion to contribute their best to the
            service of society and moulding the younger generation with the
            right values and practices that takes care of Mother Earth and
            humanity at large. I have always been impressed by the numbers and
            range of activities taken up by the NSS CRCE chapter from
            developmental programmes for our Agnel Ashram kids to two blood
            donation camps every year, awareness drives on socially relevant
            issues, assisting the Mumbai Police in crowd management during
            festivals, clean up drives, tree planting, assistance in relief work
            during natural calamities to 7-day rural camp each year with one
            development activity for the benefit of the village, interaction
            with villagers and guiding sessions for children and youth. Best
            Wishes to our NSS CRCE chapter to continue their good work and
            motivate more students to get involved and work for socially
            relevant causes. Their 'You' before 'Me' attitude makes us proud
            that they hold the vision of our founding Fathers high.
          </p>
        </div>

        <h2>- Dr. Surendra Singh Rathod</h2>
      </div>

      <div id="flagship-text" className="flagship-text">
        <h1>Flagship Events</h1>
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
