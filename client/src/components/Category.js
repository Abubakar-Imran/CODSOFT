import React, { useState, useEffect } from 'react'
import Spinner from './Spinner';
import Product from './Product';
// import PropTypes from 'prop-types'
import jsonData from '../products.json'
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from './Layout/Layout';

export default function Category(props) {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(true)

  const updateNews = async () => {
    setLoading(true)
    setProducts(jsonData.products)
    setTotalResults(jsonData.totalResults)
    setLoading(false)
  }

  useEffect(() => {
    document.title = `${props.category} - NexGen`;
    updateNews();
  },[props.category])

  const fetchMoreData = async () => {
    setPage(page + 1);
    setProducts(products.concat(jsonData.products))
    setTotalResults(jsonData.totalResults)
    setLoading(false)
  };

  return (
    <Layout>
      <div style={{backgroundImage: 'linear-gradient(0deg, #5cd2c2, #417cbc 100%)'}}>
      <h1 className="text center" style={{ textAlign: 'center', paddingTop:'20px', boxSizing:'content-box'}}> {props.category.toUpperCase()} </h1>
      <hr />
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={products.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {products.map((element) => {
              return <div className="col-md-4" key={element.id}>
                {props.category === element.category && <Product name={element.name ? element.name : ""} description={element.description ? element.description.slice(0,100) : ""} imageUrl={element.urlToImage} price={element.price} />}
              </div>
            })}
          </div>

        </div>
      </InfiniteScroll>
      </div>
    </Layout>
  )
}
