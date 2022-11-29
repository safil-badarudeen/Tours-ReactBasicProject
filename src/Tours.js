import React from 'react';
import Tour from './Tour';
const Tours = ({tour , removeTour}) => {
  return <>
  <section>
    <div className='title'>
    <h1 >Our Tour</h1>
    <div className='underline'></div>
    </div>
    <div>
      {tour.map((tours)=>{
        return <Tour key={tour.id} {...tours} removeTour={removeTour}></Tour>
      })}
    </div>

  </section>
    
  
  </>
};

export default Tours;
