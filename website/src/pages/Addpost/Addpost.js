import React from "react";
import "./Addpost.css";

const Addpost = () => {
  return (
    <div className="addpost">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h2 className="text-center">Addpost</h2>
            <div className="card-add">
              <form className="form-add">
                <div className="mt-3">
                  <label className="form-label">Nama Tempat</label>
                  <input required type="text" className="form-control" />
                </div>
                <div className="mt-3">
                  <label className="form-label">Gambar</label>
                  <input required type="text" className="form-control" />
                </div>
                <div className="mt-3">
                  <label className="form-label">Deksripsi</label>
                  <textarea required type="text" className="form-control" />
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

export default Addpost;
