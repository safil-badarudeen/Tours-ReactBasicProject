import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
 
 const [loading,setLoading]=useState(true)
 const [tours,setTours]=useState([])

 const removeTour=(id)=>{
   const newTours= tours.filter((tours)=> tours.id !== id)
   setTours(newTours)
 }


 const fetchData=async()=>{
    setLoading(true)

    try {
      const response= await fetch(url)
      const tours= await response.json()
      setTours(tours)
       setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
   
 }

 useEffect(()=>{
  fetchData();
 },[])

   if(loading){
    return(
    <main>
      <Loading/>
    </main>
    )
    
   }
   if(tours.length===0){
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
     <main>
       <Tours tour={tours} removeTour={removeTour}></Tours>
     </main> 
  )
}

export default App
