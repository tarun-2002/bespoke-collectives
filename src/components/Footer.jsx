import React from "react"
import {Link} from "react-router-dom"
function Footer(){
    return(<>
    <footer className="py-4">
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-5 mx-6">
            <div className="footer-top-data d-flex gap-30 align-items-center">

                <img src="/images/newsletter.png" alt="newsletter" />
                <h4 className="mb-0 text-white signup">Sign Up for Newsletter</h4>
            </div>
                </div>
                <div className="col-7">
                <div class="input-group input-group-md mb-0">
  <input type="text" 
  className="form-control py-1" 
  placeholder="Your Email Address Here" 
  aria-label="Your Email Address Here" 
  aria-describedby="basic-addon2"/>
  <span className="input-group-text p-2" id="basic-addon2">Subscribe</span></div>
                </div>
            </div>
        </div>
    </footer>
        <footer className="py-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-3 text-white mb-4">
                <h4 className="text-white">Quick Links</h4>
                
                <div className="footer-link d-flex flex-column">
                    <Link className="text-white mb-1 py-1" >Home</Link>
                    <Link className="text-white mb-1 py-1" >Products</Link>
                    <Link className="text-white mb-1 py-1" >About</Link>
                    <Link className="text-white mb-1 py-1" >Contact</Link>
                    <Link className="text-white mb-1 py-1" >Frequenly Asked Question</Link>
                    <Link className="text-white mb-1 py-1" >Privacy Policy</Link>
                    <Link className="text-white mb-1 py-1" >Terms & Condition</Link>
                </div>
                </div>
                <div className="col-3 text-white mb-4">
                <h4 className="text-white">Contact Us</h4>
                <div className="footer-link d-flex flex-column">
                    <Link className="text-white mb-1 py-1" >Need Help or Have a Question?</Link>
                    <p>Phone: 9910 06 9387</p>
                    <p>Email: info@bespokecollectives.com</p>
                    <div className="social-icons">
                        <a className="text-white" href="https://instagram.com/bespokecollectives?igshid=YmMyMTA2M2Y="><img className=" icon-size" src="/images/instagram-svgrepo-com.svg" alt="social icons" /></a>
                        <a className="text-white" href="https://instagram.com/bespokecollectives?igshid=YmMyMTA2M2Y="><img className=" icon-size" src="/images/facebook-svgrepo-com.svg" alt="social icons" /></a>
                        <a className="text-white" href="https://instagram.com/bespokecollectives?igshid=YmMyMTA2M2Y="><img className=" icon-size" src="/images/youtube-svgrepo-com.svg" alt="social icons" /></a>
                        <a className="text-white" href="https://instagram.com/bespokecollectives?igshid=YmMyMTA2M2Y="><img className=" icon-size" src="/images/linkedin-svgrepo-com.svg" alt="social icons" /></a>
                    </div>
                </div>
                </div>
                <div className="col-2 text-white mb-4">
                <h4 className="text-white">Get Direction</h4>
                <div className="footer-link d-flex flex-column">                    
                    <p>Plot No. 128/129, Udyog Vihar, Sector-37, Phase VI, Gurugram-122001</p>
                </div>
                </div>
            </div>
        </div>
        </footer>
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12 mb-0 text-white">
                        <p className="text-center">&copy; {new Date().getFullYear()} BeSpoke Collectives</p>
                    </div>
                </div>
            </div>
        </footer>
        </>);
}
export default Footer;