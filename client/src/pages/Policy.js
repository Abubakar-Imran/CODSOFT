import React from 'react'
import Layout from './../components/Layout/Layout'
import privacypolicy from '../pictures/privacypolicy.jpg'

export default function Policy() {
  return (
    <Layout title={"Privacy Policy - NexGen"}>
      <div className='row contactus'>
        <div className='col-md-5' style={{ textAlign: "center", marginTop: "70px" }}>
          <img src={privacypolicy} alt="about" style={{ width: "90%", height: "90%" }} />
        </div>
        <div className='col-md-6'>
          <h1 className='bg-dark p-2 text-white text-center m-4'>PRIVACY POLICY</h1>
          <h2>Effective Date:</h2>
          <p>At NexGen Homeware, we value your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect the information you provide while using our smart home ecommerce store.</p>
          <h2>Information We Collect:</h2>
          <p>We collect your contact details, payment information, and browsing behavior to process orders, provide customer support, and improve your shopping experience.</p>
          <h2>How We Use Your Information:</h2>
          <p>We use your information to fulfill orders, assist with inquiries, personalize your experience, and keep you informed about our products and offers.</p>
          <h2>Information Sharing:</h2>
          <p>We share information with service providers and partners to ensure seamless transactions and enhance our services.</p>
          <h2>Your Choices:</h2>
          <p>You can update your information, opt out of marketing communications, and delete your account.</p>
          <h2>Cookies:</h2>
          <p>We use cookies for better functionality and analytics. You can manage your cookie settings.</p>
          <h2>Changes to this Policy:</h2>
          <p>We may update this policy and will notify you of any significant changes.</p>
          
        </div>
      </div>
    </Layout>
  )
}
