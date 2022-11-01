import React from "react";
import "./AddList.css";

const Addlist = () => {
  
  return (
    <div className="Addlist">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h2 className="text-center my-5">ADD LIST</h2>
            <div className="card-add">
              <form className="form-add">
                <div className="mt-3">
                  <label className="form-label">Nama Tempat</label>
                  <input required type="text" className="form-control" />
                </div>
                <div className="mt-3">
                  <label className="form-label">Negara</label>
                  <input required type="text" className="form-control" />
                </div>
                <div className="mt-3">
                  <label className="form-label">URL Detail</label>
                  <input required type="text" className="form-control" />
                </div>
                <div className="mt-3">
                  <label className="form-label">Alamat</label>
                  <textarea required className="form-control" rows="4" />
                </div>
                <div className=" d-grid gap-2 my-5">
                  <button type="button" className="btn btn-dark btn-lg">Add</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Addlist;
