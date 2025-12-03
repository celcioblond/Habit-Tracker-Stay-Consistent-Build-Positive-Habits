import React, { useEffect, useState } from 'react'
import CardHabit from '../components/CardHabit';
import axios from "axios";

const apiURL= import.meta.env.VITE_API_URL;

const HomePage = () => {
  const [ notes, setNotes ] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiURL}/api/habits`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4 mt-16 xl:
    grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]'>
      <CardHabit />
      <CardHabit />
      <CardHabit />
      <CardHabit />
    </div>
  )
}

export default HomePage;