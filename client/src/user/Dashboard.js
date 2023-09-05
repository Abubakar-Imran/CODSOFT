import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import climate from '../assets/climate.jpg'
import entertianment from '../assets/entertianment.jpg'
import lighting from '../assets/lighting.jpg'
import plugs from '../assets/plugs.jpg'
import security from '../assets/security.jpg'
import sensors from '../assets/sensors.jpg'
import vaccum from '../assets/vaccum.jpg'
import wifi from '../assets/wifi.jpg'
import voice_assistant from '../assets/voice_assistant.jpg'

export default function Dashboard() {
  return (
    <Layout>
      <Banner/>
      <div className="products">
        <div className="product">

        <div className="p1">
            <div className="product-image">
              <img src={lighting} alt="not found" />
            </div>
            <div className="product-details">
              <div className="product-name">
                <Link to="/lighting">LIGHTING</Link>
              </div>
            </div>
          </div>
          <div className="p2">
            <div className="product-image">
              <img src={climate} alt="not found" />
            </div>
            <div className="product-details">
              <div className="product-name">
                <Link to="/climate">CLIMATE</Link>
              </div>
            </div>
          </div>
          <div className="p3">
            <div className="product-image">
              <img src={sensors} alt="not found" />
            </div>
            <div className="product-details">
              <div className="product-name">
                <Link to="/sensors">SENSORS</Link>
              </div>
            </div>
          </div>
          <div className="p4">
            <div className="product-image">
              <img src={wifi} alt="not found" />
            </div>
            <div className="product-details">
              <div className="product-name">
                <Link to="/wifi">WIFI AND NETWORKING</Link>
              </div>
            </div>
          </div>
          <div className="p5">
            <div className="product-image">
              <img src={security} alt="not found" />
            </div>
            <div className="product-details">
              <div className="product-name">
                <Link to="/security">SECURITY SYSTEM</Link>
              </div>
            </div>
          </div>
          <div className="p6">
            <div className="product-image">
              <img src={vaccum} alt="not found" />
            </div>
            <div className="product-details">
              <div className="product-name">
                <Link to="/vaccum">VACCUM AND MOPS</Link>
              </div>
            </div>
          </div>
          <div className="p7">
            <div className="product-image">
              <img src={voice_assistant} alt="not found" />
            </div>
            <div className="product-details">
              <div className="product-name">
                <Link to="/voice_assistant">VOICE ASSISTANTS</Link>
              </div>
            </div>
          </div>
          <div className="p8">
            <div className="product-image">
              <img src={plugs} alt="not found" />
            </div>
            <div className="product-details">
              <div className="product-name">
                <Link to="/plugs">PLUGS AND OUTLETS</Link>
              </div>
            </div>
          </div>
          <div className="p9">
            <div className="product-image">
              <img src={entertianment} alt="not found" />
            </div>
            <div className="product-details">
              <div className="product-name">
                <Link to="/entertainment">ENTERTAINMENT</Link>
              </div>
            </div>
          </div>

        </div>
      </div>

    </Layout>
  )
}
