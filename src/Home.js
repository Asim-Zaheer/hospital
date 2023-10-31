import React from 'react'
import {NavLink} from "react-router-dom"
import {FaFacebook,FaTwitter,FaYoutube,FaGoogle} from "react-icons/fa"
function Home() {
  return (
    <>
    <div>
      <div className="background">
        <div className="shape"></div>
      </div>
      <form>
        <h3> Login Here </h3>
        <label htmlFor="Username"> Username </label>
        <input type="text" placeholder="Email or Username" id="Username" />
        <label htmlFor="Password"> Password </label>
        <input type="password" placeholder="Password" id="Password" />
        <br />

        <NavLink to="/Home/Home.html">
          <input className="login_button" type="button" value="login" />
        </NavLink>

        <p className="text">Or</p>

        <NavLink to="/SignUp/Signup.html">
          <input className="Signup_button" type="button" value="Signup" />
        </NavLink>

        <footer className="Social">
          <div>
            <a href="/" className="twitter">
              <FaTwitter/>
            </a>
          </div>
          <div>
            <a href="/" className="facebook">
              <FaFacebook/>
            </a>
          </div>
          <div>
            <a href="/" className="gmail">
              <FaGoogle/>

            </a>
          </div>
          <div>
            <a href="/" className="youtube">
              <FaYoutube/>
            </a>
          </div>
        </footer>
      </form>
    </div>
  
    </>
  )
}

export default Home