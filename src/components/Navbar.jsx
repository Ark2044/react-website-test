import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar() {
  const [teamsAnchorEl, setTeamsAnchorEl] = useState(null);
  const [eventsAnchorEl, setEventsAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (type, event) => {
    type === "teams"
      ? setTeamsAnchorEl(event.currentTarget)
      : setEventsAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (type) => {
    type === "teams" ? setTeamsAnchorEl(null) : setEventsAnchorEl(null);
  };

  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  const handleLinkClick = () => {
    handleMenuClose("teams");
    handleMenuClose("events");
    handleMobileMenuClose();
  };

  const renderMenu = (label, anchorEl, handleClose, items) => (
    <>
      <Button
        color="inherit"
        onClick={(event) => handleMenuClick(label.toLowerCase(), event)}
        aria-controls={`${label.toLowerCase()}-menu`}
        aria-haspopup="true"
      >
        {label}
        <ExpandMoreIcon />
      </Button>
      <Menu
        id={`${label.toLowerCase()}-menu`}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item, subIndex) => (
          <MenuItem
            key={subIndex}
            component={NavLink} // Use NavLink directly for menu items
            to={item.to}
            onClick={handleLinkClick}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const Logo = ({ index }) => (
    <img
      src={`/images/logos/${
        ["nss-logo", "father-logo", "crce-logo"][index]
      }.svg`}
      alt={`${["NSS Logo", "Father Logo", "CRCE Logo"][index]}`}
      style={{
        width: [30, 30, 50][index],
        height: [30, 25, 45][index],
        marginRight: [30, 38, 10][index],
        transform: "scale(3)",
        transition: "transform 0.5s",
      }}
    />
  );

  const navigationLinks = [
    { label: "Home", to: "/" },
    { label: "Vol.Data", to: "/vol_data" },
    {
      label: "Teams",
      renderMenu: renderMenu("Teams", teamsAnchorEl, handleMenuClose, [
        { label: "Team 2023-24", to: "/team_2023_24" },
      ]),
    },
    {
      label: "Events",
      renderMenu: renderMenu("Events", eventsAnchorEl, handleMenuClose, [
        { label: "Events 2023-24", to: "/events_2023_24" },
      ]),
    },
    { label: "Tree Tag", to: "/tree_tag_main" },
    { label: "Contact Us", to: "/contactus" },
  ];

  return (
    <AppBar className="animate_animated animate_fadeInDown">
      <Toolbar className="animate_animated animate_fadeIn">
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {[...Array(3)].map((_, i) => (
            <Logo key={i} index={i} />
          ))}
        </Box>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NSS CRCE
        </Typography>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuToggle}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {navigationLinks.map((link, index) =>
            link.renderMenu ? (
              <React.Fragment key={index}>{link.renderMenu}</React.Fragment>
            ) : (
              <NavLink
                key={index}
                color="inherit"
                to={link.to}
                onClick={handleLinkClick}
              >
                <Button endIcon={link.endIcon} style={{ color: "white" }}>
                  {link.label}
                </Button>
              </NavLink>
            )
          )}
        </Box>

        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={handleMobileMenuToggle}
          PaperProps={{
            style: {
              color: "blue",
              backgroundColor: "rgba(255,255,255,0.6)",
            },
          }}
        >
          <List sx={{ display: "flex", flexDirection: "column" }}>
            {navigationLinks.map((link, index) =>
              link.renderMenu ? (
                <React.Fragment key={index}>{link.renderMenu}</React.Fragment>
              ) : (
                <NavLink
                  key={index}
                  color="inherit"
                  to={link.to}
                  onClick={() => {
                    handleLinkClick();
                    handleMobileMenuClose();
                  }}
                >
                  <Button endIcon={link.endIcon} style={{color: "blue"}}>
                    {link.label}
                  </Button>
                </NavLink>
              )
            )}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
