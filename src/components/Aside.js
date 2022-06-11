import React from 'react';
import SingleOption from './SingleOption';

function Aside({timeZones, handleSelectChange, handleAddClock}) {
  return (
   <aside>
       <div className='add-clock-box'>
        <button onClick={handleAddClock}>Add Clock</button>
        <select onChange={handleSelectChange} name='timezone' id='timezone'>
            <option>- Select a timezone -</option>;
            {timeZones.map((tz,ind)=> {
                return <SingleOption tz={tz} key={ind} />
            })}
        </select>
       </div>
   </aside>
  )
}

export default Aside