import React from 'react'

export default function Services({transfer}) {
    console.log(transfer)
  return (
    <div>
        <h2>This Is From Service</h2>
        <button onClick={()=>transfer("Data Ami Dilam Tomake")}> Click From Service</button> </div>
  )
}
