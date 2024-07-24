import React from 'react'
import Feedback from './Feedback'
import { useState,useEffect } from 'react'
import './FeedDisplay.css'

const FeedDisplay = () => {

    const [feedbacks,setFeedbacks]=useState([]);

    useEffect(() => {
      fetchFeedbacks();
    }, []); 
  
    const fetchFeedbacks= async()=>{
      let response = await fetch("http://localhost:3001/api/displayFeed", {
        method: "GET",
        headers: { 'Content-type': 'application/json' },
    });
    const data = await response.json();
        setFeedbacks(data);
    }

  return (
    <>
        <h1 className='text-4xl text-blue-400 text-center'><strong>Feedbacks </strong></h1>

     <div className='feedbacks'>
      {
         feedbacks.map((feedback,i)=>{
            return <Feedback key={i}
            name={feedback.name}
            email={feedback.email}
            feedback={feedback.feedback}
            />
         })
      }
    </div>
    </>
   
  )
}

export default FeedDisplay
