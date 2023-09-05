import React from 'react'
import Layout from './../components/Layout/Layout'
import {FiMail} from 'react-icons/fi'
import {BiPhone} from 'react-icons/bi'
import {BsHeadset} from 'react-icons/bs'
import contactus from '../pictures/contactus.jpg'

export default function Contact() {
  return (
    <Layout title={"Contact Us - NexGen"}>
      <div className='row contactus'>
        <div className='col-md-7' style={{textAlign: "center", marginTop: "20px"}}>
          <img src={contactus} alt="contactus" style={{width: "90%",height: "90%"}}/>
        </div>
        <div className='col-md-4' style={{marginTop: "130px"}}>
          <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
          <p className='text-justify mt-2'>For any query and info about product feel free to contact us.</p>
          <p className='mt-3'><FiMail/> : nexgen.help@gmail.com</p>
          <p className='mt-3'><BiPhone/> : 012-3456789</p>
          <p className='mt-3'><BsHeadset/> : 1000-0000-0000 (Toll Free)</p>
        </div>
      </div>
    </Layout>
  )
}
