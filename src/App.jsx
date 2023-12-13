// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Vol_Data from './components/pages/volunteer/Vol_Data';
import Events_2023_24 from './components/pages/events/Events_2023_24';
import Team_2023_24 from './components/pages/team/Team_2023_24';
import WebCardList from './components/pages/team/teamcards/WebCardList';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/vol_data" element={<Vol_Data/>} />
          <Route path="/events_2023_24" element={<Events_2023_24/>} />
          <Route path="/team_2023_24" element={<Team_2023_24/>} />
          <Route path="/web_card_list" element={<WebCardList/>} />
        </Routes>
        <ScrollToTopButton /> {/* Add this component to reset scroll position */}
        <Footer />
    </Router>
  );
}

export default App;
