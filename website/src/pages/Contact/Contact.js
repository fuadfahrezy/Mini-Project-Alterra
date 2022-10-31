import React, { useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    Swal.fire(
      "Sukses",
      `Halo, ${fullname}, Terima kasih sudah mengirim pesan di Website kami`,
      "success"
    )
  };
  return (
    <>
      <div className="contact">
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="text-center">
                <h2 className="h2-contact pb-5">꧁•⊹٭𝙲𝚘𝚗𝚝𝚊𝚌𝚝٭⊹•꧂</h2>
              </div>
              <div className="card-contact">
                <h6 className="text-center">Please enter the data below. </h6>
                <form onSubmit={submitHandler} className="form-contact">
                  <div className="row justify-content-between text-left">
                    <div className="mt-3">
                      <label className="form-label form-label-contact px-3">FullName</label>
                      <div className="col-md-11 mx-3">
                        <input required value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label form-label-contact px-3">Email</label>
                      <div className="col-md-11 mx-3">
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label form-label-contact px-3">Phone Number</label>
                      <div className="col-md-11 mx-3">
                        <input required value={number} onChange={(e) => setNumber(e.target.value)} type="number" className="form-control" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label form-label-contact px-3">Message</label>
                      <div className="col-md-11 mx-3">
                        <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className="form-control mb-4" rows="4" />
                      </div>
                      <button
                        type="submit"
                        className=" submit-contact col-md-11 mx-3 btn btn-dark btn-lg d-flex justify-content-center"
                      >
                        Submit
                      </button>
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

export default Contact;
