import React from 'react'
import Fetch from '../components/Fetch'
import Spinner from 'react-spinner'

const Home = () => {
    
  return (
      <div className="bg-gray-200 text-2xl p-4">

        <Fetch /> 
        <Spinner />
     </div>
     
 
  );
}

export default Home
