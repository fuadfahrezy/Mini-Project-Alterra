import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className="login">
    <div className="container-fluid pt-3">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card-login">
            <div className='text-center'>
              <h2 className='header-login'>𝐋𝐨𝐠 𝐈𝐧</h2>
            </div>
            <form className="form-login">
            <div className="row justify-content-between text-left">
            <div className="mt-3">
                  <label className="form-label-login px-3">Email</label>
                  <div className="col-md-11 mx-3">
                    <input type="email" className="form-control"/>
                  </div>
                </div>
            <div className="mt-3">
                  <label className="form-label-login px-3">Password</label>
                  <div className="col-md-11 mx-3">
                    <input type="password" className="form-control"/>
                  </div>
                </div>
                <div className="button-login">
                  <button className="btn btn-dark col-md-11 btn-lg d-flex justify-content-center mx-3">Login</button>
                </div>
            </div>
            </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login