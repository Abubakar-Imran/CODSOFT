import React from 'react';
import Layout from './../components/Layout/Layout'
import about from '../pictures/about.jpg'

export default function About() {
  return (
    <Layout title={"About Us - NexGen"}>
      <div className='row contactus'>
        <div className='col-md-5' style={{textAlign: "center", marginTop: "50px"}}>
          <img src={about} alt="about" style={{width: "90%",height: "90%"}}/>
        </div>
        <div className='col-md-6'>
          <h1 className='bg-dark p-2 text-white text-center m-4'>ABOUT</h1>
          <div className='text-center'>
            <p className='text-center'>"Welcome to NexGen Homeware - Your Gateway to a Smarter Home!</p>
            <p>At NexGen Homeware, we're committed to transforming your living spaces into cutting-edge, intelligent abodes. Discover a curated collection of innovative smart home products that seamlessly blend technology with everyday living. Our mission is to simplify your life, enhance your comfort, and elevate your security through a range of state-of-the-art devices.</p>
            <p>Explore a world where your home adapts to your needs effortlessly. From intuitive automated lighting that adjusts to your mood, to climate control systems that anticipate your preferences, our selection brings you the future of living today. Experience the convenience of remote control and monitoring through your smartphone, ensuring your home is just a touch away, no matter where you are.</p>
            <p>Embrace the future with confidence as NexGen Homeware offers not just products, but a lifestyle upgrade. Whether you're a tech enthusiast or someone looking to make their home life more efficient, we're here to guide you through the realm of intelligent living. Join us in creating a harmonious symphony of technology and comfort - welcome to NexGen Homeware!"</p>
          </div>

        </div>
      </div>
    </Layout>
  )
}
