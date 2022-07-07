import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaVoicemail} from "react-icons/fa";
export default function About() {
  return (
    <div className='container-fluid pt-5' >

        <section className='row pt-5 bg-white justify-content-evenly align-items-center pb-5'>
          <div className=' pt-5 col-md-5'>
            <h1>Our Goal</h1>
            <p className='lead'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit velit odit soluta adipisci dignissimos eum quisquam accusamus, facilis ullam tempora, asperiores aperiam voluptate in voluptatibus ad reiciendis voluptas tenetur cupiditate?</p>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            </ul>
            <a href='' className='text-warning'><strong>Read More</strong></a>
          </div>
          <div className='col-md-4 pt-5'>
            <img src="https://img.freepik.com/free-vector/worker-exercising-workplace-while-work-laptop-office-male-character-stretching-legs-desk-doing-workout-work-place-health-care-sport-activity-concept-cartoon-vector-illustration_1016-9731.jpg?w=2000" alt="" className='im'/>
          </div>
        </section>


        <section className='text-center py-5'>
          <h1 className='pb-4'>Our Member</h1>
          <div className='row justify-content-evenly'>
            <div className='col-12 col-md-3'>
              <img src="https://specials-images.forbesimg.com/imageserve/61ae3c942bf830d5f0b90539/416x416.jpg?background=000000&cropX1=914&cropX2=4250&cropY1=0&cropY2=3334" alt="" className='ro' />
              <p><strong>Member Name</strong></p>
              <p className='text-warning'>Loremipsum.</p>
            </div>
            <div className='col-12 col-md-3'>
              <img src="https://www.goldinglawyers.com/wp-content/uploads/2019/10/US-Person-vs-US-Citizen-and-Worldwide-Income-Asset-Rules-260x300.jpg" alt="" className='ro' height={'150px'}/>
              <p><strong>Member Name</strong></p>
              <p className='text-warning'>Loremipsum.</p>
            </div>
            <div className='col-12 col-md-3'>
              <img src="https://specials-images.forbesimg.com/imageserve/61ae9e9ff0382e22173e1903/416x416.jpg?background=000000&cropX1=343&cropX2=1125&cropY1=137&cropY2=920" alt="" className='ro' height={'150px'}/>
              <p><strong>Member Name</strong></p>
              <p className='text-warning'>Loremipsum.</p>
              <FaFacebookSquare className='fs-4 me-2 mb-2' />
              <FaTwitterSquare className='fs-4 me-2 mb-2' />
              <FaInstagramSquare className='fs-4 me-2 mb-2' />
            </div>
            <div className='col-12 col-md-3'>
              <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis=" alt="" className='ro' height={'150px'}/>
              <p><strong>Member Name</strong></p>
              <p className='text-warning'>Loremipsum.</p>
            </div>
          </div>
        </section>

        <section className='bg-white py-5 row justify-content-evenly align-items-center'>
          <div className='col-12 col-md-4 py-3'>
            <img src="https://www.clipartmax.com/png/full/92-928967_office-worker-female-office-worker-female-office-worker-office-worker-cartoon-png.png" className='im' alt="" />
          </div>
          <div className='col-12 col-md-3 py-3'>
            <h1>We're Hiring</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <button className='btn btn-warning text-white px-4'>Register</button>
          </div>
        </section>


        <div className="container">
        <section className='row justify-content-evenly align-items-center py-5 '>
          <div className='col-12 col-md-5 py-2'>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, facilis.</p>
          </div>
          <div className='col-12 col-md-3 pb-2'>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className='col-12 col-md-3'>
            <button className='btn btn-warning px-5 text-white'>sign up</button>
          </div>
        </section>
        </div>


    </div>
  )
}
