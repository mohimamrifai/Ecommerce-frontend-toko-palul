import React from 'react'
import './style.css'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Cart = ({cartItem, addToCart, removeCart}) => {


  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)

  
  return (
    <>

    <section className="background container-cart">
      <div className="container">
      <div className="content-cart">
        <div className="carts">
          {cartItem.map((data) => {
            const productQty = data.price * data.qty
            return (
              <div className="cart shadow" key={data.id}>
                <img src={data.cover} alt={data.name} />
                <div className="text-mid">
                  <h2>{data.name}</h2>
                  <div>
                      <span className='price'>${data.price}.00 * {data.qty}</span>
                      <span className="qty">  ${productQty}.00</span>
                  </div>
                </div>
                <div className="text-end">
                      <button className='btn-plus-card' onClick={() => removeCart(data)}>
                            <AiOutlineMinus />
                      </button>
                      <button className='btn-plus-card' onClick={() => addToCart(data)}>
                            <AiOutlinePlus />
                      </button>
                </div>
              </div>
            )
          })}
        </div>
        <div className="summary shadow">
          <h2>Summary</h2>
          <hr />
          <p>Total Price :  $ {totalPrice}</p>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Cart