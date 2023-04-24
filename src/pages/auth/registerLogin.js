import React,{ useState } from "react";
import {useRef, useEffect} from 'react';
import axios from "axios"

import  ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const RegisterLogin = () => {
	const [name,setName] = useState("")
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const [phone,setPhone] = useState("")
	const navigate = useNavigate();

	// const handleSubmit = async(e)=>{
	// 	e.preventDefault()
	// 	try {
	// 		const res = await axios.post("api/v1/auth/registerLogin",{name,email,password,phone})
	// 		if(res.data.success)
	// 		{
	// 			alert(res.data.message)
	// 			navigate("/registerLogin")
	// 		}
	// 		else{
	// 			alert(res.data.message)
	// 		}
	// 	} 
	// 	catch(error) {
	// 		console.log(error);
	// 		alert("Error")
	// 	}
// }
	


	
		const [swapPanel, setSwapPanel] = useState(false);
	
		const signUpButton = () => {
		  setSwapPanel(true);
		};
		const signInButton = () => {
		  setSwapPanel(false);
		};
	

	  
		return (<>
		  <div className="regis">
			<div
			  className={["container reg", swapPanel ? "right-panel-active" : null]
				.filter(Boolean)
				.join(" ")}
			  id="container"
			>
			  <div className="form-container sign-up-container">
				<form action="#">
				  <h1>Create Account</h1>
				  <div className="social-container"></div>
				  <span>or use your email for registration</span>
				  <input type="text" placeholder="Name" />
				  <input type="email" placeholder="Email" />
				  <input type="password" placeholder="Password" />
				  <button onClick={signUpButton}>Sign Up</button>
				</form>
			  </div>
			  <div className="form-container sign-in-container">
				<form action="#">
				  <h1>Sign in</h1>
				  <div className="social-container"></div>
				  <span>or use your account</span>
				  <input type="email" placeholder="Email" />
				  <input type="password" placeholder="Password" />
				  Forgot your password?
				  {/* <a href="#">Forgot your password?</a> */}
				  <button onClick={signInButton}>Sign In</button>
				</form>
			  </div>
			  <div className="overlay-container">
				<div className="overlay">
				  <div className="overlay-panel overlay-left">
					<h1>Welcome Back!</h1>
					<p>
					  To keep connected with us please login with your personal info
					</p>
					<button
					  type="button"
					  onClick={signInButton}
					  className="ghost"
					  id="signIn"
					>
					  Sign In
					</button>
				  </div>
				  <div className="overlay-panel overlay-right">
					<h1>Hello, Friend!</h1>
					<p>Enter your personal details and start journey with us</p>
					<button
					  type="button"
					  onClick={signUpButton}
					  className="ghost"
					  id="signUp"
					>
					  Sign Up
					</button>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  </>
		)
		
};


export default RegisterLogin