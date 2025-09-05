import React from 'react'

const Hero = () => {
  return (
 <>
  <section className='flex flex-col w-[80vw] justify-between bg-gray-100 p-6 rounded-lg m-5'>
    <div>
        <h2 className='text-black text-3xl font-bold'>Hello! Mike</h2>
        <p className='text-gray-500'>Tuesday 25 March 2025</p>
    </div>
    <div className='mt-8 flex justify-between'>
      {/* Total Tasks  */}
      <div  >
        <ul className='flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-gallery-horizontal-end-icon lucide-gallery-horizontal-end text-blue-700"><path d="M2 7v10"/><path d="M6 5v14"/><rect width="12" height="18" x="10" y="3" rx="2"/></svg>
              <div>
                <span className='font-bold'>18</span>
                <span className='text-gray-500 font-medium'>Total tasks</span>
              </div>
        </ul>
      </div>
       {/* Pending Tasks  */}
      <div>
        <ul className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clipboard-clock-icon lucide-clipboard-clock text-purple-700"><path d="M16 14v2.2l1.6 1"/><path d="M16 4h2a2 2 0 0 1 2 2v.832"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
              <div>
                 <span className='font-bold'>11</span>
                <span className='text-gray-500 font-medium'>Pending tasks</span>
              </div>
               
        </ul>
      </div>
       {/* In progress Tasks  */}
      <div>
        <ul className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-dot-dashed-icon lucide-circle-dot-dashed text-blue-400"><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"/><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"/><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"/><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"/><circle cx="12" cy="12" r="1"/></svg>
                <div>
                <span className='font-bold'>5</span>
                <span className='text-gray-500 font-medium'>Inprogress Tasks</span>  
                </div>
     
        </ul>
      </div>
       {/* Completed Tasks  */}
      <div>
        <ul className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-check-icon lucide-book-check text-green-600"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 9.5 2 2 4-4"/></svg>
              <div>
                <span className='font-bold'>2</span>
                <span className='text-gray-500 font-medium'>Completed tasks</span>
                </div>   
        </ul>
      </div>
    </div>
  </section>
 </>
  )
}

export default Hero
