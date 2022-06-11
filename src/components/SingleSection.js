import { tz } from 'moment-timezone'
import React from 'react'

function SingleSection({tz, handleTZRemove}) {
  return (
    <div className='single-timezone'>
        <span onClick={()=>handleTZRemove(tz.id)}>x</span>
        <h3 className='single-clock'>{tz.zoneName}</h3>
        <div>{tz.zoneTime}</div>
    </div>
  )
}

export default SingleSection;