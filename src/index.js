
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { AllData } from './Data/AllData';
import AllCart from './Cart/AllCart';
import ScrollToTop from 'react-scroll-to-top';
import AllProducts from './Products/AllProducts';
import AllAbout from './About/AllAbout';
import AllContact from './Contact/AllContact';
import AllSingleProduct from './SingleProduct/AllSingleProduct';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CartProvider } from 'react-use-cart';

var routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "products",
        element: <AllProducts/>
    },
    {
        path: "about",
        element: <AllAbout/>
    },
    {
        path: "contact",
        element: <AllContact/>
    },
    {
        path: "singleproduct/:id",
        element: <AllSingleProduct/>
    },
    {
        path: "cart",
        element: <AllCart />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AllData>
        <CartProvider>
        <ScrollToTop />
        <RouterProvider router={routes} />    
        </CartProvider>
    </AllData>

);

