import React from 'react';

function LightblueNotes({filteredLightblue}) {
  return <div>
    {filteredLightblue.map((item) => (
        <div key={item.id} className='lightblue-notes'>
            {item.note}
        </div> 
    ))}
  </div>;
}

export default LightblueNotes;
