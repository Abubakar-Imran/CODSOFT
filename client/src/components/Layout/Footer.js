import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='company p-2'>
                <h3>NexGen Homeware</h3>
                <p>Elevate Your Home with NexGen Homeware - Discover a world of smart living through cutting-edge products that blend seamlessly with your lifestyle. Experience the future today.</p>
            </div>
            <div className='info p-2'>
                <Link to="/about">ABOUT</Link>|
                <Link to="/contact">CONTACT</Link>|
                <Link to="/policy">PRIVACY POLICY</Link>|
            </div>
            <div className='copyright p-2'>
                <h3>Copyright NexGen Homeware &copy; 2023. All rights reserved.</h3>
            </div>
        </div>
    )
}
