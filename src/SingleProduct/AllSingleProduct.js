import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useParams } from 'react-router'
import { apiValue } from '../Data/AllData'
import { useCart } from 'react-use-cart'

function AllSingleProduct() {
  const { id } = useParams();
  const data = useContext(apiValue);
  const { addItem } = useCart();

  return (
    
    <div>
        <Navbar/>
        {data.map( (element)=>{
            return element.id === id? (
                <div className="find-us">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-heading">
          <h2>Our Location on Maps</h2>
        </div>
      </div>
      <div className="col-md-4 product-image">
        <div id="map">
          <img
            src={element.images[0]}
            width="100%"
            height= "200px"
            alt='n'
            style={{ border: 0 }}
            allowFullScreen=""
          />
        </div>
      </div>
      <div className="col-md-8 pt-5">
        <div className="left-content">
          <h4>{element.title}</h4>
          <p>
            {element.description}
            Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate
            nihil eumester consectetur similiqu consectetur.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisic elit. Et,
            consequuntur, modi mollitia corporis ipsa voluptate corrupti.
            <br />
            <br />                    
          <span>Rating: {element.rating}/5</span>
          </p>
          
          
          <button onClick={()=>addItem(element)} className='ml-4 '>Add to Cart</button>

        </div>
      </div>
    </div>
  </div>
                </div>
            ):null
        })}
        <Footer/>
    </div>
    
  )
}

export default AllSingleProduct