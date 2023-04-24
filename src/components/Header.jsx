import React from "react"
import { NavLink,Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header(){
    return(<>
<header className="header-top-strip py-1">
    <div className="container-xxl">
        <din className="row">
            <div className="col-6">
                <p className="text-start text-white mb-0">Get 30% Off on bulk orders.</p>
            </div>
            <div className="col-6">
                <p className="text-end text-white mb-0">Phone: 9910 06 9387 | Email: info@bespokecollectives.com</p>
            </div>
        </din>
    </div>
</header>
<header className="header-upper py-3">
    <div className="container-xxl">
        <div className="row">
            <div className="col-5 navigation text-start align-items-center px-2">
                <NavLink className="navlink px-4 text-white"  to="/">HOME</NavLink>
                <NavLink className="navlink px-4 text-white"  to="/products">PRODUCTS</NavLink>
                <NavLink className="navlink px-4 text-white" to="/about">ABOUT</NavLink>
                <NavLink className="navlink px-4 text-white" to="/contacts">CONTACT</NavLink>
            </div>
            <div className="col-2 circular">
                    <img src="/images/logo-border.png" alt="" />
            </div>
            <div className="col-3 searchcolumn">
            <div class="input-group input-group-sm mb-0 search">
  <input type="text" 
  className="form-control" 
  placeholder="Search Gifts, Boxes.." 
  aria-label="Search Gifts, Boxes.." 
  aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2"><BsSearch /></span></div></div>
  
        <div className="header-upper-links d-flex align-items-center justify-content-between col-2">
            <div  className=" spacing "><Link>
            <img src="/images/wishlist.svg" alt="wishlist" />
            </Link></div>
            <div><Link className=" spacing">
            <img src="/images/cart.svg" alt="cart" />
            </Link></div>
            <div><Link className=" spacing">
            <NavLink to="/registerLogin"><img src="/images/login.svg" alt="user" /></NavLink>
            </Link></div>
        </div>
    </div>
</div>
</header>

    </>);
}
export default Header;