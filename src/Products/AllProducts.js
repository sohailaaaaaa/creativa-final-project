import React, { useContext, useState, useEffect, useRef } from 'react'
import Header from './Header'
import Products from './Products'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useCart } from 'react-use-cart'
import { apiValue } from '../Data/AllData'
import { Link } from 'react-router'
import Isotope from 'isotope-layout'

function Page () {
  const data = useContext(apiValue);

  const [search, setSearch] =useState("All");
  const { addItem } = useCart();
  
  const getValue = (status)=>{
      setSearch(status);
  }

  const gridRef = useRef(null);
  const isotopeRef = useRef(null);
  
useEffect(() => {
    if (!data.length || !gridRef.current) return;

    isotopeRef.current = new Isotope(gridRef.current, {
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
            columnWidth: ".all"
        }
    });

    isotopeRef.current.arrange({
        filter: "*"
    });

    return () => {
        isotopeRef.current?.destroy();
        isotopeRef.current = null;
    };
}, [data]);

useEffect(() => {
    if (!isotopeRef.current) return;

    isotopeRef.current.arrange({
        filter: search === "All"
            ? "*"
            : `.all[data-status="${search}"]`
    });

}, [search]);

  return(
    <div>
      <div className="products">
          <div className="container">
            <div className="row">

              <div className="col-md-12">
                <div className="filters">
                  <ul>
                    <li >
                      <button className={search == "All"?"active":""} data-filter="*" onClick={()=>getValue("All")}>
                        All Products
                      </button>
      
                       
                    </li>
                    <button className={search == "featured"?"active":""}  onClick={()=>getValue("featured")}>Featured</button>
                    <button className={search == "flashdeals"?"active":""} onClick={()=>getValue("flashdeals")}>Flash Deals</button>
                    <button className={search == "lastminute"?"active":""} onClick={()=>getValue("lastminute")}>Last Minute</button>
                  </ul>
                </div>
              </div>

              <div className="col-md-12">
                <div className="filters-content">
                  <div className="row grid" ref={gridRef}>

                      {data.map((item) => (
                          <div
                            key={item.id}
                            className="col-lg-4 col-md-4 all des"
                            data-status={item.status}
                          >
                              <div className="product-item">
            <Link to={`/singleproduct/${item.id}`}>
                <img
                    src={item.images[0]}
                    alt={item.title}
                    width="400"
                    height="250"
                    style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover"
                    }}
                />
            </Link>

            <div className="down-content">
                <Link to={`/singleproduct/${item.id}`}>
                    <h4>{item.title}</h4>
                </Link>

                <h6>${item.price}</h6>

                <p>{item.description}</p>

                <span>Rating: {item.rating}/5</span>

                <button onClick={() => addItem(item)}>
                    Add to Cart
                </button>
            </div>
                              </div>
                          </div>
                      ))}

                  </div>
                </div>
              </div>



            </div>
          </div>
      </div>
    </div>
  )
}



function AllProducts() {
  return (
    <div>
        <Navbar/>
        <Header/>

        <Page/>

        <Footer/>
    </div>
  )
}

export default AllProducts