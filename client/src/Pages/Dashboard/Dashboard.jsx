import Hero from '../../components/Hero/Hero'
import Distribution from '../../components/Distribution/Distribution'
import Prioritychart from '../../components/Prioritychart/Prioritychart'
import Datagrid from '../../components/Datagrid/Datagrid'

const Dashboard = () => {
  return (
    <>
     <div className='inline-block bg-gray-100'>
      <Hero/>
      <section className='flex justify-between items-center p-5 gap-2'>
        <div className='w-[28vw] h-[50vh] outline-double outline-1 outline-gray-300 p-5 rounded-lg bg-white'>
          <h1 className='font-bold text-black mb-10 text-xl'>Task Distribution</h1>
        <Distribution/>
        </div>
        <div className='w-[48vw] h-[50vh] outline-double outline-1 outline-gray-300 p-5 rounded-lg bg-white'>
           <h1 className='font-bold text-black mb-6 text-xl'>Task Priority Levels</h1>
         <Prioritychart/>
        </div>
      </section>
      <div className='m-5 p-5 outline-double outline-1 outline-gray-300 rounded-lg mb-10 bg-white'>
        <h1 className='font-bold text-black mb-6 text-xl'>Recent Tasks</h1>
       <Datagrid/>
      </div>
     </div>
    </>
  )
}

export default Dashboard
