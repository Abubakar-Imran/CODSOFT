import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';


export default function Layout({ children, title, description, keywords, author }) {
  return (
    <div style={{backgroundImage: 'linear-gradient(0deg, #5cd2c2, #417cbc 100%)'}}>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "66vh" }}>
        <Toaster/>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'NexGen Homeware',
  description: 'Welcome to NexGen Homeware - Your Gateway to a Smarter Home! - Discover a world of smart living through cutting-edge products that blend seamlessly with your lifestyle. From automated lighting to intuitive security systems, experience the future today.',
  keywords: 'mern, react, node, mongodb',
  author: 'Abubakar Imran'
}