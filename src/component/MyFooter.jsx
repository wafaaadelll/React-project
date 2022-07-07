import React from 'react'
import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaVoicemail} from "react-icons/fa";
export default function MyFooter() {
  return (
    <div className='bg-dark text-white pt-5 pb-3 text-center'>
       <div className="container">
        <div className="row justify-content-evenly">
          <div className='col-12 col-md-3 '>
            <img className='imgr' src='https://media.marketrealist.com/brand-img/Ik1D_rqGf/0x0/newprofile-pic-1-1652281674003.jpg'/>
            <span>dreamy,</span>
            <br/>
            <FaFacebookSquare className='fs-4 me-2 m-2' />
            <FaTwitterSquare className='fs-4 me-2 m-2' />
            <FaInstagramSquare className='fs-4 me-2 m-2' />
          </div>
          <div className='col-12 col-md-3 cl'>
            <p className='mt-3'><strong>CONTACT US</strong></p>
            <a href="">wafaa@wafaa.com</a>
            <br/>
            <a href="">58 el-tahrir street Egypt,Tanta</a>
            <br/>
            <a href="">+342 158 9874</a>
          </div>
          <div className='col-12 col-md-3 '>
            <p className='mt-3'><strong>SUBSCRIBE</strong></p>
            <p className=' clp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, voluptatum!</p>
            <input type={'search'} placeholder='E-mail' className='mb-4'/><FaVoicemail className='fs-4 me-2 m-2' />
          </div>
        <hr/>
        <div >
          <p className='clp text-center'>@2020 all rights reserved ITI</p>
        </div>
        </div>
       </div>
    </div>
  )
}
