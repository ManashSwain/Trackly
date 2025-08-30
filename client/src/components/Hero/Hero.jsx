import React from 'react'

const Hero = () => {
  return (
 <>
  <section>
    <div>
        <h2>Hello! Mike</h2>
        <p>Tuesday 25 March 2025</p>
    </div>
    <div>
      {/* Total Tasks  */}
      <div>
        <ul>
            <li className='marker:text-blue-700'>
                <span>18</span>
                <span>Total tasks</span>
            </li>
        </ul>
      </div>
       {/* Pending Tasks  */}
      <div>
        <ul>
            <li className='marker:text-purple-700-700'>
                <span>11</span>
                <span>Pending tasks</span>
            </li>
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
