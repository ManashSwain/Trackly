import React from 'react'
import Hero from '../../components/Hero/Hero'
import Distribution from '../../components/Distribution/Distribution'
import Prioritychart from '../../components/Prioritychart/Prioritychart'
import Datagrid from '../../components/Datagrid/Datagrid'

const Dashboard = () => {
  return (
    <>
     <div className='inline-block'>
      <Hero/>
      <Distribution/>
      <Prioritychart/>
      <Datagrid/>
     </div>
      
    </>
  )
}

export default Dashboard
