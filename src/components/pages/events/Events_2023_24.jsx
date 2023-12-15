// src/pages/events/Events_2023_24.jsx
import React from 'react';
import AugustEventList from './eventcards/AugustEventList';
import SeptemberEventList from './eventcards/SeptemberEventList';
import OctoberEventList from './eventcards/OctoberEventList';
import DecemberEventList from './eventcards/DecemberEventList';
function Events_2023_24() {
  return (
    <div>
      <h1>August</h1>
      {/* Home page content */}
      <AugustEventList />
      <h1>September</h1>
      <SeptemberEventList/>
      <h1>October</h1>
      <OctoberEventList/>
      <h1>December</h1>
      <DecemberEventList/> 
    </div>
  );
}

export default Events_2023_24;
