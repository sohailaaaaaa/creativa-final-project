import React from 'react'
import { CartProvider, useCart } from 'react-use-cart'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router'

function Cart(){
    const{items, updateItemQuantity, removeItem,totalItems, totalUniqueItems, cartTotal,emptyCart,isEmpty}= useCart()
    return(
        <div>
          <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <div className="container px-3 my-5 clearfix">
    {/* Shopping cart table*/}
    <div className="card">
      <div className="card-header">
        <h2>Shopping Cart</h2>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <div className="block-heading">
              <h4 className="text-center margin-bottom:1.2rem">Shopping Cart</h4>
          </div>
        
          
          <table className="table table-bordered m-0">
            <thead>
              <tr>
                {/* Set columns width */}
                <th className="text-center py-3 px-4" style={{ minWidth: 400 }}>
                  Product Name &amp; Details
                </th>
                <th className="text-right py-3 px-4" style={{ width: 100 }}>
                  Price
                </th>
                <th className="text-center py-3 px-4" style={{ width: 120 }}>
                  Quantity
                </th>
                <th className="text-right py-3 px-4" style={{ width: 100 }}>
                  Total
                </th>
                <th
                  className="text-center align-middle py-3 px-0"
                  style={{ width: 40 }}
                >
                  <a
                    href="#"
                    className="shop-tooltip float-none text-light"
                    title=""
                    data-original-title="Clear cart"
                  >
                    <i className="ino ion-md-trash" />
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item=>{
                return(
              <tr>
                <td className="p-4">
                  <div className="media align-items-center">
                    <img
                      src={item.images[0]}
                      className="d-block ui-w-40 ui-bordered mr-4"
                      alt=""
                    />
                    <div className="media-body">
                      
                      <Link to={`/singleproduct/${item.id}`} className="d-block text-dark">
                        {item.title}
                      </Link> &nbsp;
                      <small>
                        <p className="text-muted">Brand:{item.brand}</p>
                        <p className="text-muted">Category: {item.category}</p>
                        <p className="text-muted">{item.shippingInformation} </p>
                      </small>
                    </div>
                  </div>
                </td>
                <td className="text-right font-weight-semibold align-middle p-4">
                  ${item.price}
                </td>
                <td className="text-center font-weight-semibold align-middle p-4 plusandminus">
                  <button onClick={()=>updateItemQuantity(item.id,item.quantity-1)} className='ml-0, mr-2'>-</button>
                  {item.quantity}
                  <button onClick={()=>updateItemQuantity(item.id,item.quantity+1)} className='mr-0, ml-2'>+</button>
                </td>
                <td className="text-right font-weight-semibold align-middle p-4">
                  ${Math.ceil(item.price*item.quantity)}
                </td>
                <td className="text-center align-middle px-0">
                  <button
                    href="#"
                    className="shop-tooltip close float-none text-danger" onClick={()=>removeItem(item.id)}
                    title=""
                    data-original-title="Remove"
                  >
                    ×
                  </button>
                </td>
              </tr>
                )
              }))}



            </tbody>
          </table>
        </div>
        {/* / Shopping cart table */}
        <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
          <div className="mt-4">
            <label className="text-muted font-weight-normal">Promocode</label>
            <input type="text" placeholder="ABC" className="form-control" />
          </div>
          <div className="d-flex">
            <div className="text-center mt-4 mr-5 ">
              <label className="text-muted font-weight-normal m-0">
                Total Items
              </label>
              <div className="text-large">
                <strong>{totalItems}</strong>
              </div>
            </div>
            <div className="text-center mt-4 mr-5">
              <label className="text-muted font-weight-normal m-0">
                Discount
              </label>
              <div className="text-large">
                <strong>$20</strong>
              </div>
            </div>
            <div className="text-right mt-4">
              <label className="text-muted font-weight-normal m-0">
                Total price
              </label>
              <div className="text-large">
                <strong>${cartTotal>0?Math.ceil(cartTotal - 20):null}</strong>
              </div>
            </div>

          </div>
        </div>
        <div className="float-right">
          <button
            type="button"
            className="btn btn-lg btn-default md-btn-flat mt-2 mr-3"
          >
            Back to shopping
          </button>
          <button type="button" className="btn btn-lg mt-2 btn-danger checkout">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\nbody{\n    margin-top:50px;\n    background:#eee;\n}\n.ui-w-40 {\n    width: 40px !important;\n    height: auto;\n}\n\n.card{\n    box-shadow: 0 1px 15px 1px rgba(52,40,104,.08);    \n}\n\n.ui-product-color {\n    display: inline-block;\n    overflow: hidden;\n    margin: .144em;\n    width: .875rem;\n    height: .875rem;\n    border-radius: 10rem;\n    -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;\n    box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;\n    vertical-align: middle;\n}\n"
    }}
  />
</>

        </div>
    )
}

function AllCart() {
  return (
    <CartProvider>
        <Navbar/>
        <Cart/>
        <Footer/>
    </CartProvider>
  )
}

export default AllCart