// // src/components/Footer.jsx
// import React from "react";
// <link rel="stylesheet" href="../../public/style.css" />;

// import { useEffect, useState } from 'react';

// function LastUpdated() {
//   const [lastUpdated, setLastUpdated] = useState(null);

//   useEffect(() => {
//     // Replace 'owner' and 'repo' with your GitHub username and repository name.
//     fetch('https://api.github.com/repos/CRCE-NSS/WEBSITE-REACT')
//       .then((response) => response.json())
//       .then((data) => {
//         const lastUpdatedDate = new Date(data.pushed_at);
//         const formattedDate = `${lastUpdatedDate.getDate()} ${lastUpdatedDate.toLocaleString(
//           'default',
//           { month: 'short' }
//         )} ${lastUpdatedDate.getFullYear()}`;
//         setLastUpdated(formattedDate);
//       });
//   }, []);

//   return <p id="last-updated">Last Updated: {lastUpdated}</p>;
// }


// function Footer() {
//   return (
//     <section className="footer">
//       <div className="box-container">
//         <div className="box" id="vendor">
//           <div className="inline nssLogo">
//             <img
//               className="nss-logo"
//               alt="NSS Logo"
//               src="/images/logos/nss-logo.svg"
//             />
//             <h3 className="nss-logo-h3">National Service Scheme</h3>
//           </div>

//           <div className="inline frLogo">
//             <img
//               className="father-logo"
//               alt="Father Logo"
//               src="/images/logos/father-logo.svg"
//             />
//             <img
//               className="crce-logo"
//               alt="CRCE Logo"
//               src="/images/logos/crce-logo.svg"
//             />
//             <h3 className="crce-logo-h3">
//               Fr. Conceicao Rodrigues College of Engineering
//             </h3>
//           </div>

//           <p>Feel free to follow us on our social media handles</p>

//           <div className="share">
//             <a
//               href="https://www.facebook.com/NssCrce/"
//               className="fa-brands fa-facebook"
//               title="facebook"
//             ></a>
//             <a
//               href="https://twitter.com/nssCRCE"
//               className="fa-brands fa-twitter"
//               title="twitter"
//             ></a>
//             <a
//               href="https://www.instagram.com/nss.crce/"
//               className="fa-brands fa-instagram"
//               title="instagram"
//             ></a>
//             <a
//               href="https://www.linkedin.com/in/nss-crce-0a44951b0/"
//               className="fa-brands fa-linkedin"
//               title="linkedin"
//             ></a>
//             <a
//               href="https://www.youtube.com/@nsscrce502/videos"
//               className="fa-brands fa-youtube"
//               title="youtube"
//             ></a>
//           </div>
//         </div>

//         <div className="box" id="contact">
//           <h3>Contact Info</h3>
//           <a href="#" className="links">
//             <i className="fa fa-phone"></i>+91 99204 14062 Ratan
//             Singh(President)
//           </a>
//           <a href="#" className="links">
//             <i className="fa fa-phone"></i>+91 93266 65726 Krishna Soni(Vice
//             President)
//           </a>
//           <a href="#" className="links">
//             <i className="fa fa-phone"></i>+91 9969354409 Aarush Wasnik(Senior
//             Web-Master)
//           </a>
//           <a href="mailto:crce.nss@gmail.com" className="links lower">
//             <i className="fa-solid fa-envelope"></i>crce.nss@gmail.com
//           </a>
//           <a
//             href="https://www.google.com/maps/place/Fr.+Conceicao+Rodrigues+College+of+Engineering/@19.044333,72.8203705,15z/data=!4m5!3m4!1s0x0:0x111b63353dbbce01!8m2!3d19.044333!4d72.8203705"
//             className="links"
//           >
//             <i className="fa fa-map-marker"></i>Fr. Conceicao Rodrigues College
//             of Enginnering, Father Agnel Ashram, Bandstand Promenade, Mount
//             Mary, Bandra West, Mumbai, Maharashtra.
//           </a>
//         </div>
//       </div>

//       <div className="footer-end">
//         <div className="copyright-and-designers">
//           <h4 className="copyright">
//             Copyright © 2023 <span> </span>
//             <a className="nss" href="/">
//             NSS-CRCE
//             </a>
//             . DESIGN & DEVELOPMENT BY{" "}
//             <a className="designers" href="/web_card_list">
//               NSS-CRCE WEB TEAM
//             </a>
//           </h4>
//           <LastUpdated />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;

// src/components/Footer.jsx
import { Grid, Typography, Stack, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

import React from "react";
<link rel="stylesheet" href="../../public/style.css" />;
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useEffect, useState } from 'react';


function LastUpdated() {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    // Replace 'owner' and 'repo' with your GitHub username and repository name.
    fetch('https://api.github.com/repos/CRCE-NSS/WEBSITE-REACT')
      .then((response) => response.json())
      .then((data) => {
        const lastUpdatedDate = new Date(data.pushed_at);
        const formattedDate = `${lastUpdatedDate.getDate()} ${lastUpdatedDate.toLocaleString(
          'default',
          { month: 'short' }
        )} ${lastUpdatedDate.getFullYear()}`;
        setLastUpdated(formattedDate);
      });
  }, []);

  return <p id="last-updated">Last Updated: {lastUpdated}</p>;
}


function Footer() {
  return (
    <section className="footer">
      <Grid container spacing={3} sx={{ bgcolor: 'lightBlue' }}>
        <Grid item xs={12} md={6} >
          <Stack
            direction="column"
            spacing={3}>
            <Stack
              direction="row"
              spacing={10}
              alignItems="center"
              justifyContent="center"
            >
              <Box >
                <img
                  className="nss-logo"
                  alt="NSS Logo"
                  src="/images/logos/nss-logo.svg"
                  style={{
                    width: '50px',
                    height: '50px',
                    transform: 'scale(2)',
                    transition: 'transform 0.2s',
                  }}
                />
              </Box>
              <Typography variant="h5" color="darkBlue" sx={{ marginTop: '20' }}>
                National Service Scheme
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={5}

            >
              <Stack sx={{ marginTop: '100px' }}
                direction="row"
                spacing={1} >

                <img
                  className="father-logo"
                  alt="Father Logo"
                  src="/images/logos/father-logo.svg"
                  style={{
                    width: '50px',
                    height: '50px',
                    transform: 'scale(2.5)',
                    transition: 'transform 0.2s',
                    lineHeight: '20px',
                    marginLeft: '20px',
                  }}
                />
                <img
                  className="crce-logo"
                  alt="CRCE Logo"
                  src="/images/logos/crce-logo.svg"
                  style={{
                    width: '50px',
                    height: '50px',
                    transform: 'scale(3)',
                    transition: 'transform 0.2s',
                    marginLeft: '50px',
                  }}
                />
              </Stack>
              <Typography variant="h5" color="darkBlue" sx={{ marginTop: '20' }}>
                Fr. Conceicao Rodrigues College of Engineering
              </Typography>
            </Stack>
          </Stack>
          <Grid container spacing={3} sx={{ alignItem: "center",justifyContent: "center", marginTop: "20px" }}>
            <Grid item >
              <Typography variant="h6" color="gray" textAlign={"center"}>
                Feel free to follow us on our social media handles
              </Typography>
            </Grid>
            <Grid item container spacing={2} sx={{alignItems:"center" ,justifyContent:"center"}}>
              <Grid item className="share" >

                <a
                  href="https://www.facebook.com/NssCrce/"
                  className="fa-brands fa-facebook"
                  title="facebook"

                ></a>
                <a
                  href="https://twitter.com/nssCRCE"
                  className="fa-brands fa-twitter"
                  title="twitter"
                ></a>
                <a
                  href="https://www.instagram.com/nss.crce/"
                  className="fa-brands fa-instagram"
                  title="instagram"
                ></a>
                <a
                  href="https://www.linkedin.com/in/nss-crce-0a44951b0/"
                  className="fa-brands fa-linkedin"
                  title="linkedin"
                ></a>
                <a
                  href="https://www.youtube.com/@nsscrce502/videos"
                  className="fa-brands fa-youtube"
                  title="youtube"
                ></a>
              </Grid>
            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" color="darkBlue" component="div">
            Contact Info
          </Typography>
          <List sx={{ marginLeft: '110px' ,
                       '@media (max-width: 600px)': {
                        
                        marginLeft: '35px',
                      },
            }}>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText
                primary="+91 99204 14062 Ratan Singh(President)">
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText
                primary="+91 93266 65726 Krishna Soni(Vice President)">
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText
                primary="+91 9969354409 Aarush Wasnik(Senior Web-Master)">
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText
                primary="crce.nss@gmail.com">
              </ListItemText>
            </ListItem>
            <ListItem component="a" href="https://www.google.com/maps/place/Fr.+Conceicao+Rodrigues+College+of+Engineering/@19.044333,72.8203705,15z/data=!4m5!3m4!1s0x0:0x111b63353dbbce01!8m2!3d19.044333!4d72.8203705">
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText style={{ color: 'darkblue' }}
                primary="Fr. Conceicao Rodrigues College of Enginnering, Father Agnel Ashram, Bandstand Promenade, Mount Mary, Bandra West, Mumbai, Maharashtra.">
              </ListItemText>
            </ListItem>
          </List>

        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" sx={{ bgcolor: 'rgb(53, 190, 235)', paddingTop: "30px" }} color="white">
            Copyright © 2023 NSS-CRCE. DESIGN & DEVELOPMENT BY
            <a href="/web_card_list" style={{ color: "white" }}> NSS-CRCE WEB TEAM</a>
            <LastUpdated />
          </Typography>

        </Grid>
      </Grid>

    </section>

  );
}

export default Footer;