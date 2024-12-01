import React from 'react'
import{ Header, Footer} from "./components/index"
import { Outlet } from 'react-router-dom'
function Layouts() {
  return (
    <div>
      <Header/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default Layouts
