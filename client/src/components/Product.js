import React from 'react'
import { useCart } from '../context/cart'
import { toast } from 'react-hot-toast';

export default function Product(props) {
  let { name, price, description, imageUrl } = props

  const [cart,setCart] = useCart();

  return (
    <div className='my-2' style={{boxShadow: 'rgba(0, 0, 0, 1) 0px 5px 15px', margin: '15px'}}>
      <div className="card" style={{ maxHeight: '450px', maxWidth: '400px', textAlign: 'center' }}>
        <img src={imageUrl ? imageUrl : "https://blog.logrocket.com/wp-content/uploads/2022/06/build-random-number-generator-blockchain-nocdn.png"} className="card-img-top" alt="..." width={'200px'} height={'200px'}/>
        <div className="card-body" style={{ backgroundColor: 'rgb(198 228 242)'}}>
          <hr />
          <h5 className="card-title">{name}</h5>
          <hr />
          <p className="card-text">{description}</p>
          <div className='container'>
            <p className="card-text" style={{fontWeight: 'bold'}}>Price: Rs.{price}
            <button className='btn btn-info' style={{marginLeft: '25px'}}
            onClick={() => {
              setCart([...cart,props])
              localStorage.setItem('cart', JSON.stringify([...cart, props]))
              toast.success("Item added to cart")
            }}>Add to cart</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
