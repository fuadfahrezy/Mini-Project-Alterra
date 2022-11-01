import React from "react";
import './Register.css';

const Register = () => {
  return (
    <>
      <div className="register pb-3">
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="text-center">
                <h2 className="h2-register pb-3">Register</h2>
              </div>
              <div className="card-register">
                <form className="form-register">
                  <div className="row justify-content-between text-left">
                    <div className="mt-3">
                      <label className="form-label form-label-register px-3">
                        First Name
                      </label>
                      <div className="col-md-11 mx-3">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label form-label-register px-3">
                        Last Name
                      </label>
                      <div className="col-md-11 mx-3">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label form-label-register px-3">
                        Email Address
                      </label>
                      <div className="col-md-11 mx-3">
                        <input type="emai" className="form-control" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label form-label-register px-3">
                        Password
                      </label>
                      <div className="col-md-11 mx-3">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label form-label-register px-3">
                        Confirm Password
                      </label>
                      <div className="col-md-11 mx-3">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="d-grid gap-2">
                        <button type="button" className="submit-register col-md-11 mx-3 btn btn-dark btn-lg d-flex justify-content-center mb-4">Register</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
