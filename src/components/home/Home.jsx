import React from 'react'
import { Topbar } from '../topbar/Topbar'
import { Navbars } from '../topbar/Navbar'
import Slideshow from '../sideshow/Sideshow'
import data from "../../../data.json"
import { Product } from '../products/Product'
import { Bottom } from '../bottom/Bottom'
import { Footer } from '../footer/Footer'

export const Home = () => {
  return (
    <div>
        <Topbar/>
        <Navbars/>
        <Slideshow/>
        <Product data={data.shoes} label="SNEAKERS"/>
        <Product data={data.access} label="ACCESSORIES"/>
        <Bottom/>
        <Footer/>
    </div>
  )
}
