import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
          <div className="foot">
            <div className="top flex">
             <div className="p1 flex  flex-col">
                 <div className="pp1">
                     <h2 className=' mb6'>About Passport</h2>
                     <p>Far far away, behind the word mountains,there live the blind texts</p>
                 </div>
                 <div className="pp2">
                      <h2>Connect</h2>
                      <ul className='flex '>
                        <li className=''><a href="#"><img src='./instagram.png' /></a></li>
                        <li className='ml-2'><a href="#"><img src='./facebook.png'  /></a></li>
                        <li className='ml-2'><a href="#"><img src='./youtube.png' /></a></li>
                        <li className='ml-2'><a href="#"><img src='./twitter.png' /></a></li>
                        <li className='ml-2'><a href="#"><img src='./telegram.png'  /></a></li>
                        <li className='ml-2'><a href="#"><img src='./linkedin.png'  /></a></li>
                      </ul>
                 </div>
            </div>
            <div className="p2">
              <ul>
                <li className="f1 ">Links</li>
                <li>About us</li>
                <li>Services</li>
                <li>News</li>
                <li>Feedback</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="p3">
             <ul>
                <li className="f1">Company</li>
                <li>About us</li>
                <li>Services</li>
                <li>News</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="p4">
            <ul>
                <li className="f1">Contact</li>
                <li>LNCT Group of colleges</li>
                <li>+91 88-*****-590</li>
                <li>+91 99-*****-126</li>
                <li>ontheway@gmail.com</li>
                
              </ul>
            </div>
            </div>
            <div className="copy pt-[12vh] pb-[8vh]">
              <p className=' text-center'>Copyright ©2024. All Rights Reserved. — Designed with love by <a href="" className=" to-white">  H & D</a></p>
            </div>

          </div>
    </div>
  )
}

export default Footer
