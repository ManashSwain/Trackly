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
      <section className='flex justify-between items-center p-5 gap-2'>
        <div className='w-[28vw] h-[50vh] outline-double outline-1 outline-gray-300 p-5 rounded-lg'>
          <h1 className='font-bold text-black mb-10 text-xl'>Task Distribution</h1>
        <Distribution/>
        </div>
        <div className='w-[48vw] h-[50vh] outline-double outline-1 outline-gray-300 p-5 rounded-lg'>
           <h1 className='font-bold text-black mb-6 text-xl'>Task Priority Levels</h1>
         <Prioritychart/>
        </div>
      </section>
      <Datagrid/>
     </div>
      
    </>
  )
}

export default Dashboard
