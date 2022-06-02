import React from 'react'
import CardItem from './CardItem'
import './CardMain.css'

export default function CardMain() {
  return (
    <div className='first-card'>
    <div className='first-card1'>

    <div className='header'>
    <div className='header-main'>
        <span className='menu'><i class="fa-solid fa-bars"></i></span>
        <span className='user'><i class="fa-solid fa-circle"></i></span>
    </div>

    <h2 className='text-name'>Blogs</h2>

    </div>

    <div className='input-header'>
    <div className='first-inp'>
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className='second-inp'>
    <input className="search-input" type="text" placeholder="Search Blogs"/>
    </div>
    <div className='three-inp'>
    <i class="fa-solid fa-sliders"></i>
    </div>
    </div>
    <div className='second-main'>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    {/* <CardItem/> */}
    </div>
    <div className='three-main d-flex justify-content-evenly mt-4' style={{flexDirection:"row"}}>
        <span className='latest'>Latest</span>
        <span className='featured text-muted'>Featured</span>
        <span className='premium text-muted'>Premium</span>
    </div>
    </div>

    <div className='first-card2'>
    <div className='header'>
    <div className='header-main'>
        <span className='menu'><i class="fa-solid fa-arrow-left-long"></i></span>
        {/* <span className='user'><i class="fa-solid fa-circle"></i></span> */}
    </div>
    </div>
    <div className='second-img'>
    <div className='second-png'><i class="fa-solid fa-bookmark"></i></div>
        <img className="second-img-img" src='assets/new-delhi.jpg'/>
    </div>
    <span className='text-muted mt-2 mb-2'>By<span className='text-black fw-bold'> Kelly Peter</span></span>
    <h2 className='fs-6 fw-bold'>How to become master in colour palette?</h2>
    <span className='text-muted mt-2 mb-2'>Yet, as a systems designer. I'm often in the position to provoke and <span className='text-black'>validate color</span> decisions as a system take shape.</span>
    <span className='text-muted mt-2 mb-2'>Here's a 16 lessons I've learned while stabilizing a primary palette,<span className='text-black'> tint and shade</span> choices, secondary palettes, and solving for accessible contract.</span>
    <span className='text-muted mt-2 mb-2'>Every organization has one, two, or no more than a few core brand colors. <span className='text-black'>THE red.</span> <span className='text-black'>THE blue.</span> <span className='text-black'>THE orange.</span> Settle on them.</span>
    </div>
    </div>
  )
}
