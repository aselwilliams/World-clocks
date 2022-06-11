import React from 'react'

function Main({timeZones, handleSelectChange,listOfSelectedTZ, handleAddClock,handleTZRemove}) {
  return (
    <div>
        <main>
            <Aside handleAddClock={handleAddClock} timeZones={timeZones} handleSelectChange={handleSelectChange} />
            <Section handleTZRemove={handleTZRemove} listOfSelectedTZ={listOfSelectedTZ} />
        </main>
    </div>
  )
}

export default Main