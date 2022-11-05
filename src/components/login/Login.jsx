/* eslint-disable jsx-a11y/anchor-is-valid */
import './login.css'

const Login = () => {
  return (
      <div className="container">
            {/* first div */}
            <div className="left-container">
                  <div className="overlay-container">
                        <div className="vector">
                              <div className="vector-panel vector-right">
                              <div>
                                    {/* <img src={} /> */}
                              </div>
                              </div>
                        </div>
                  </div>
            </div>

            {/* Second div */}
            <div className="vector-container">
            <form>
            <h2>Kindly provide the details below to login:</h2>
                  <div className="inputBx">
                  <label for="password">Password</label>
                        <input type="name" placeholder="Enter your username" />
                  </div> 
                  <div className='details'>
                  <label for="password">Password</label>
                        <input type="password" placeholder="Enter your password" />
                  </div>
                  <div className="inputBx">
                        <button type="text">Login</button>
                  </div>
                  <div className="inputBx">
                        <p><a href="#">Forgot your password?</a></p>
                  </div>
                  <hr />
                  <div className="form-footer">
                  Want access to platform? <a href="#">Request access</a> 
                  </div>
            </form>
            </div>
  </div>
  )
}

export default Login