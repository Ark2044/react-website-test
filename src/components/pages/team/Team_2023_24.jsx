// src/pages/events/Team_2023_24.jsx
import React from 'react';
import SCCardList from './teamcards/SCCardList';
import JCCardList from './teamcards/JCCardList';
import POCardList from './teamcards/POCardList';
function Team_2023_24() {
  return (
    <div className='Home'>
      <h1>Team 2023-24</h1>
      <h2>Senior Council</h2>
      <SCCardList />
      <h2>Junior Council</h2>
      <JCCardList />
      <h2>Program Officers</h2>
      <POCardList />
    </div>
  );
}

export default Team_2023_24;
