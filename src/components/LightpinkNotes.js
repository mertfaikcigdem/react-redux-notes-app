import React from 'react';

function LightpinkNotes({filteredLightpink}) {
  return <div>
    {filteredLightpink.map((item) => (
        <div key={item.id} className='lightpink-notes'>
            {item.note}
        </div> 
    ))}
  </div>;
}

export default LightpinkNotes;
