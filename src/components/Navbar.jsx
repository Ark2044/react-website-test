// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar() {
  const [teamsAnchorEl, setTeamsAnchorEl] = useState(null);
  const [eventsAnchorEl, setEventsAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTeamsMenuClick = (event) => {
    setTeamsAnchorEl(event.currentTarget);
  };

  const handleTeamsMenuClose = () => {
    setTeamsAnchorEl(null);
  };

  const handleEventsMenuClick = (event) => {
    setEventsAnchorEl(event.currentTarget);
  };

  const handleEventsMenuClose = () => {
    setEventsAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (url) => {
    handleTeamsMenuClose();
    handleEventsMenuClose();
    handleMobileMenuClose();
  };

  const navigationLinks = [
    { label: "Home", to: "/" },
    { label: "Vol.Data", to: "/vol_data" },
    {
      label: "Teams",
      onClick: handleTeamsMenuClick,
      endIcon: <ExpandMoreIcon />,
      items: [
        { label: "Team 2023-24", to: "/team_2023_24" },
        // Add more dropdown items if needed
      ],
    },
    {
      label: "Events",
      onClick: handleEventsMenuClick,
      endIcon: <ExpandMoreIcon />,
      items: [
        { label: "Events 2023-24", to: "/events_2023_24" },
        // Add more dropdown items if needed
      ],
    },
    { label: "Contact Us", to: "/contactus" },
    // Add more navigation links if needed
  ];

  return (
    <AppBar className="animate__animated animate__fadeInDown">
      <Toolbar className="animate__animated animate__fadeIn">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/logos/nss-logo.svg"
            alt="NSS Logo"
            style={{
              width: 30,
              height: 30,
              marginRight: 30,
              transform: "scale(3.5)",
              transition: "transform 0.2s",
            }}
          />
          <img
            src="/images/logos/father-logo.svg"
            alt="Father Logo"
            style={{
              width: 30,
              height: 25,
              marginRight: 38,
              transform: "scale(3.5)",
              transition: "transform 0.2s",
            }}
          />
          <img
            src="/images/logos/crce-logo.svg"
            alt="CRCE Logo"
            style={{
              width: 50,
              height: 45,
              marginRight: 10,
              transform: "scale(3)",
              transition: "transform 0.2s",
            }}
          />
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            NSS CRCE
          </Link>
        </Typography>

        {/* Hamburger icon for small screens */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuToggle}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Navigation links */}
        <div
          sx={{
            display: {
              xs: mobileMenuOpen ? "flex" : "none",
              md: "flex",
              "@media screen and (max-width: 960px)": {
                md: "none",
              },
            },
          }}
        >
          {navigationLinks.map((link, index) =>
            // Render a Button with a Menu for dropdowns
            link.items ? (
              <React.Fragment key={index}>
                <Button
                  key={index}
                  color="inherit"
                  onClick={link.onClick}
                  aria-controls={`${link.label.toLowerCase()}-menu`}
                  aria-haspopup="true"
                >
                  {link.label}
                  {link.endIcon}
                </Button>
                <Menu
                  id={`${link.label.toLowerCase()}-menu`}
                  anchorEl={
                    link.label === "Teams" ? teamsAnchorEl : eventsAnchorEl
                  }
                  open={
                    link.label === "Teams"
                      ? Boolean(teamsAnchorEl)
                      : Boolean(eventsAnchorEl)
                  }
                  onClose={
                    link.label === "Teams"
                      ? handleTeamsMenuClose
                      : handleEventsMenuClose
                  }
                >
                  {link.items.map((item, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      component={Link}
                      to={item.to}
                      onClick={() => handleLinkClick(item.to)}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </React.Fragment>
            ) : (
              // Render a simple Button for regular links
              <Button
                key={index}
                color="inherit"
                component={link.to ? Link : "button"}
                to={link.to}
                onClick={link.onClick}
                endIcon={link.endIcon}
              >
                {link.label}
              </Button>
            )
          )}
        </div>

        {/* Drawer for small screens */}
        <Drawer
          anchor="left"
          open={mobileMenuOpen}
          onClose={handleMobileMenuToggle}
        >
          <List>
            {navigationLinks.map((link, index) => (
              <ListItem
                key={index}
                button
                onClick={() => handleLinkClick(link.to)}
                aria-controls={link.items && `${link.label.toLowerCase()}-menu`}
                aria-haspopup={link.items && "true"}
              >
                {link.label}
                {link.items && link.endIcon}
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
