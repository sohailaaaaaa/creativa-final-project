import React from 'react'
import { Link } from 'react-router'

function Products() {
  return (
    <div>
        <div className="latest-products">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-heading">
          <h2>Latest Products</h2>
          <Link to="/products">
            view all products <i className="fa fa-angle-right" />
          </Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <a href="#">
            <img src="assets/images/product_01.jpg" alt="" />
          </a>
          <div className="down-content">
            <a href="#">
              <h4>Tittle goes here</h4>
            </a>
            <h6>$25.75</h6>
            <p>
              Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis
              nulla aspernatur.
            </p>
            <span>Reviews (24)</span>
            
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <a href="#">
            <img src="assets/images/product_02.jpg" alt="" />
          </a>
          <div className="down-content">
            <a href="#">
              <h4>Tittle goes here</h4>
            </a>
            <h6>$30.25</h6>
            <p>
              Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis
              nulla aspernatur.
            </p>
            <span>Reviews (21)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <a href="#">
            <img src="assets/images/product_03.jpg" alt="" />
          </a>
          <div className="down-content">
            <a href="#">
              <h4>Tittle goes here</h4>
            </a>
            <h6>$20.45</h6>
            <p>Sixteen Clothing is free CSS template provided by TemplateMo.</p>
            <span>Reviews (36)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <a href="#">
            <img src="assets/images/product_04.jpg" alt="" />
          </a>
          <div className="down-content">
            <a href="#">
              <h4>Tittle goes here</h4>
            </a>
            <h6>$15.25</h6>
            <p>
              Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis
              nulla aspernatur.
            </p>
            <span>Reviews (48)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <a href="#">
            <img src="assets/images/product_05.jpg" alt="" />
          </a>
          <div className="down-content">
            <a href="#">
              <h4>Tittle goes here</h4>
            </a>
            <h6>$12.50</h6>
            <p>
              Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis
              nulla aspernatur.
            </p>
            <span>Reviews (16)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <a href="#">
            <img src="assets/images/product_06.jpg" alt="" />
          </a>
          <div className="down-content">
            <a href="#">
              <h4>Tittle goes here</h4>
            </a>
            <h6>$22.50</h6>
            <p>
              Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis
              nulla aspernatur.
            </p>
            <span>Reviews (32)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Products