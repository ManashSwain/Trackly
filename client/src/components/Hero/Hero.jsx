import React from 'react'

const Hero = () => {
  return (
 <>
  <section className='flex flex-col w-[80vw] justify-between bg-gray-100 p-5 rounded-lg m-5'>
    <div>
        <h2 className='text-black text-3xl'>Hello! Mike</h2>
        <p className='text-gray-500'>Tuesday 25 March 2025</p>
    </div>
    <div className='mt-8 flex justify-between'>
      {/* Total Tasks  */}
      <div  >
        <ul className='flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-gallery-horizontal-end-icon lucide-gallery-horizontal-end text-blue-700"><path d="M2 7v10"/><path d="M6 5v14"/><rect width="12" height="18" x="10" y="3" rx="2"/></svg>
              <div>
                <span className='font-bold mx-1'>18</span>
                <span className='text-gray-500 font-medium'>Total tasks</span>
              </div>
        </ul>
      </div>
       {/* Pending Tasks  */}
      <div>
        <ul>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clipboard-clock-icon lucide-clipboard-clock text-purple-700"><path d="M16 14v2.2l1.6 1"/><path d="M16 4h2a2 2 0 0 1 2 2v.832"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
              <div>
                 <span className='font-bold mx-1'>11</span>
                <span className='text-gray-500 font-medium'>Pending tasks</span>
              </div>
               
        </ul>
      </div>
       {/* In progress Tasks  */}
      <div>
        <ul>
            <li className='marker:text-blue-500'>
                <span>5</span>
                <span>In Progress Tasks</span>
            </li>
        </ul>
      </div>
       {/* Completed Tasks  */}
      <div>
        <ul>
            <li className='marker:text-green-700'>
                <span>2</span>
                <span>Completed tasks</span>
            </li>
        </ul>
      </div>

    </div>
  </section>
 </>
  )
}

export default Hero
