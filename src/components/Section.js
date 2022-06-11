import React from 'react'
import SingleOption from './SingleOption'

function Section({listOfSelectedTZ, handleTZRemove}) {
  return (
   <section>
       {listOfSelectedTZ.map((tz)=>{
           return(
               <SingleOption handleTZRemove={handleTZRemove} tz={tz} key={tz.id} />
           )
       })}
   </section>
  )
}

export default Section