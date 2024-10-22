import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './assets/Components/Products/Products'
import Services from "./assets/Components/sevices"
function App() {

  
 const [status, setStatus] = useState (true);
 
 const transfer =(message) => {
   console.log(message)
 }
 
//  const handleStatus = ()=> {
//   setStatus(!status)
//  }
//  console.log(status)
  
  return (
    <>
    
   {/* <Products></Products>
   
   
   
    <button onClick={handleStatus}>Handle Status</button>

    {status ?<Products></Products> : <Services></Services>} */}
    <Services transfer= {transfer}></Services>
    </>
  )
}

export default App
