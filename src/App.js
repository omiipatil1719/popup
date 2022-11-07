import React, { useState, useEffect, } from 'react';

import EventClick from './EventClick';
const App = () => {
  const [eventClick, setClickEvent] = useState(false)

  
  const popClick = () => {
    setClickEvent(true)

  }

  return (
    <>
      <div className='home-container'>
        <div className='home-1'>
          <div className='' >
          </div>
          <button onClick={popClick}>popup</button>
        </div>
      </div>

      {
        eventClick && (
          <EventClick
            show={eventClick}
            onHide={() => setClickEvent(false)}
          />
        )
      }
    </>
  )
}

export default App;