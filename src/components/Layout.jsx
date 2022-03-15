import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Routesss from '../routes/routesss'

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header/>
            <div className="container">
              <div className='main'>
              <Routesss/>
              </div>
            </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Layout
