import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';


const Distribution = () => {
  return (
    <>
    <section>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 7, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={200}
      height={200}
    />
    </section>
    </>
  )
}

export default Distribution
