import React from 'react';

function LightgreenNotes({filteredLightgreen}) {
  return <div>
    {filteredLightgreen.map((item) => (
        <div key={item.id} className='lightgreen-notes'>
            {item.note}
        </div> 
    ))}
  </div>
}

export default LightgreenNotes;
