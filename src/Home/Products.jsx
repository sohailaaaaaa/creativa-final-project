<<<<<<< HEAD

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
          <Link to="/singleproduct/1">
            <img src="assets/images/product_01.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/1`}>
              <h4>Mustard Brown Ankle Boots</h4>
            </Link>
            <h6>$25.75</h6>
            <p>
              A stylish pair of ankle boots featuring a warm brown and mustard-yellow tone. Designed to add a distinctive touch to your casual and everyday outfits.
            </p>
            <span>Reviews (24)</span>
            
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <Link to="/singleproduct/2">
            <img src="assets/images/product_02.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/2`}>
              <h4>Essential Grey Knit Beanie</h4>
            </Link>
            <h6>$30.25</h6>
            <p>
              A classic knitted beanie in a neutral grey shade. A practical cold-weather accessory that combines everyday comfort with effortless style.
            </p>
            <span>Reviews (21)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <Link to="/singleproduct/3">
            <img src="assets/images/product_03.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/3`}>
              <h4>Neon Green Statement Scarf</h4>
            </Link>
            <h6>$20.45</h6>
            <p>A vibrant neon-green scarf that brings a bold pop of colour to your winter wardrobe. Perfect for adding a playful touch to simple outfits.</p>
            <span>Reviews (36)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <Link to="/singleproduct/4">
            <img src="assets/images/product_04.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/4`}>
              <h4>Cozy Plush Snowman Decoration</h4>
            </Link>
            <h6>$15.25</h6>
            <p>
              A delightful fabric snowman decoration with a soft, charming appearance. A lovely addition to your seasonal home décor or festive display.
            </p>
            <span>Reviews (48)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <Link to="/singleproduct/5">
            <img src="assets/images/product_05.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/5`}>
              <h4>Blue & Grey Striped Knit Sweater</h4>
            </Link>
            <h6>$12.50</h6>
            <p>
              A comfortable knitted sweater featuring a classic combination of blue and grey stripes. An easy-to-style piece for a relaxed, casual look.
            </p>
            <span>Reviews (16)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <Link to="/singleproduct/6">
            <img src="assets/images/product_06.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/5`}>
              <h4>Cozy Plush Snowman Decoration</h4>
            </Link>
            <h6>$22.50</h6>
            <p>
              A delightful fabric snowman decoration with a soft, charming appearance. A lovely addition to your seasonal home décor or festive display.
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

=======

import { Link } from 'react-router'
import { apiValue } from '../Data/AllData';

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
          <Link to="/singleproduct/1">
            <img src="assets/images/product_01.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/1`}>
              <h4>Mustard Brown Ankle Boots</h4>
            </Link>
            <h6>$25.75</h6>
            <p>
              A stylish pair of ankle boots featuring a warm brown and mustard-yellow tone. Designed to add a distinctive touch to your casual and everyday outfits.
            </p>
            <span>Reviews (24)</span>
            
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <Link to="/singleproduct/2">
            <img src="assets/images/product_02.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/2`}>
              <h4>Essential Grey Knit Beanie</h4>
            </Link>
            <h6>$30.25</h6>
            <p>
              A classic knitted beanie in a neutral grey shade. A practical cold-weather accessory that combines everyday comfort with effortless style.
            </p>
            <span>Reviews (21)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <Link to="/singleproduct/3">
            <img src="assets/images/product_03.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/3`}>
              <h4>Neon Green Statement Scarf</h4>
            </Link>
            <h6>$20.45</h6>
            <p>A vibrant neon-green scarf that brings a bold pop of colour to your winter wardrobe. Perfect for adding a playful touch to simple outfits.</p>
            <span>Reviews (36)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <Link to="/singleproduct/4">
            <img src="assets/images/product_04.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/4`}>
              <h4>Cozy Plush Snowman Decoration</h4>
            </Link>
            <h6>$15.25</h6>
            <p>
              A delightful fabric snowman decoration with a soft, charming appearance. A lovely addition to your seasonal home décor or festive display.
            </p>
            <span>Reviews (48)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <Link to="/singleproduct/5">
            <img src="assets/images/product_05.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/5`}>
              <h4>Blue & Grey Striped Knit Sweater</h4>
            </Link>
            <h6>$12.50</h6>
            <p>
              A comfortable knitted sweater featuring a classic combination of blue and grey stripes. An easy-to-style piece for a relaxed, casual look.
            </p>
            <span>Reviews (16)</span>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-item">
          <Link to="/singleproduct/6">
            <img src="assets/images/product_06.jpg" alt="" />
          </Link>
          <div className="down-content">
            <Link to={`/singleproduct/5`}>
              <h4>Cozy Plush Snowman Decoration</h4>
            </Link>
            <h6>$22.50</h6>
            <p>
              A delightful fabric snowman decoration with a soft, charming appearance. A lovely addition to your seasonal home décor or festive display.
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

>>>>>>> e4510855f4cd25cc61d182f9a1271840efc56f08
export default Products