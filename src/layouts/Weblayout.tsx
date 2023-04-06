import React from 'react'
import {Header, Footer} from "../components"
import { Outlet } from "react-router-dom"


const Weblayout = () => {
  return (
      <>
          <Header />
          <main>
              <Outlet/>
          </main>
          <Footer/>
      </>
  )
}

export default Weblayout