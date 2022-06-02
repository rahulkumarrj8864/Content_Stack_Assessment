import React from 'react'
import './CardItem.css'

export default function CardItem() {
  return (
    <div className='card-main'>
    <div class="card-col d-flex justify-content-center align-items-center" style={{flexDirection:"row"}}>
    <div className='card-left'>
    <div className='date' style={{position:"absolute",background:"#fff"}}>
        <span className='date-date'>3 Feb</span>
    </div>
        <img style={{borderRadius:"10px"}} className="card-img" src='assets/image.png'/>
    </div>
    <div className='card-right'>
    <p className='text-muted' style={{position:"relative",top:"8px"}}>05 mins Read</p>
    <h4 className='text-main' style={{position:"relative",bottom:"5px"}}>Make designs systems people want to use.</h4>
    <div className='third-last' style={{position:"relative",bottom:"8px"}}>
        <span className='clap'>22.8K <i class="fa fa-light fa-hands-clapping"></i></span>
        <span className='massage'>8K <i class="fa fa-light fa-comment"></i></span>
    </div>
    </div>
    </div>
    </div>
  )
}
