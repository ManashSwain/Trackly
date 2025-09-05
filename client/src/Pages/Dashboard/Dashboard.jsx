import React from 'react'
import Hero from '../../components/Hero/Hero'
import Distribution from '../../components/Distribution/Distribution'
import Prioritychart from '../../components/Prioritychart/Prioritychart'

const Dashboard = () => {
  return (
    <>
     <div className='inline-block'>
      <Hero/>
      <Distribution/>
      <Prioritychart/>
     </div>
      
    </>
  )
}

export default Dashboard
