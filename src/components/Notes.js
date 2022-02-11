import React from 'react';
import '../App.css';
import LightblueNotes from './LightblueNotes';
import LightpinkNotes from './LightpinkNotes';
import LightgreenNotes from './LightgreenNotes';

function Notes({filteredLightblue, filteredLightgreen, filteredLightpink}) {
  return <div className='notes'>
      <div className="notes-elements">
        <LightblueNotes filteredLightblue={filteredLightblue}/>
        <LightgreenNotes filteredLightgreen={filteredLightgreen}/>
        <LightpinkNotes  filteredLightpink={filteredLightpink}/>
      </div>
  </div>;
}

export default Notes;
