import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";

import mailIcon from "../../assets/icons/mail.svg"
import lockIcon from "../../assets/icons/password.svg"

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="loginPage">
      <header>
      </header>
      <main>
        <h1>Log In or Sign Up</h1>
        <div className="form-field">
          {isLoading && (
            <div className="loaded">
              <div className="loaderBox">
                <HashLoader color='#35693f' className='dotLoader' size={40} />
              </div>
            </div>
          )}
          <form>
            <div className="signupContainer">
              <input 
                type="email"
                placeholder="Email Address"
              />
              <img src={mailIcon} alt="" />
            </div>
            <div className="passVisibility">
              <div className="signupContainer">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <img src={lockIcon} alt="" />
              </div>
              <div className='showPword' onClick={togglePasswordVisibility} >
                {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
              </div>
            </div>
            {/* <p className="err-mssg" >error</p> */}
            {/* <span className='exist'>Don&apos;t have an account, <Link to='/SignUp'>SignUp Here</Link></span> */}
            <button>Continue</button>
          </form>
          <p className="terms">By clicking “continue”, you agree to our User <u>Terms of Service</u> and <u>Privacy Policy</u></p>
          {/* <p><Link to="/ChangePassword">Forgot Password</Link></p> */}
        </div>
      </main>
    </div>

  );
}
 
export default LoginScreen;