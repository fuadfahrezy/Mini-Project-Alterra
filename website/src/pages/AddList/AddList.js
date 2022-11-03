import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddLists } from "../../redux/listSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./AddList.css";

const Addlist = () => {
  const [namaTempat, setNamaTempat] = useState('');
  const [negara, setNegara] = useState('');
  const [alamat, setAlamat] = useState('');
  const [detail, setDetail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addHandler = async (e) => {
    e.preventDefault();
    await dispatch(AddLists({namaTempat, negara, alamat, detail}));

    Swal.fire(
      'Data Berhasil Dibuat',
      '👍👍👍',
      'success'
    )

  navigate('/list');
  }

  return (
    <div className="Addlist">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h2 className="text-center my-5">ADD LIST</h2>
            <div className="card-add">
              <form onSubmit={addHandler} className="form-add">
                <div className="mt-3">
                  <label className="form-label">Nama Tempat</label>
                  <input required type="text" 
                  className="form-control" 
                  value={namaTempat}
                  onChange={(e) => setNamaTempat(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label">Negara</label>
                  <input required type="text" 
                  className="form-control"
                  value={negara}
                  onChange={(e) => setNegara(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label">URL Detail</label>
                  <input required type="text" 
                  className="form-control" 
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label">Alamat</label>
                  <textarea required 
                  className="form-control" 
                  rows="4" 
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  />
                </div>
                <div className=" d-grid gap-2 my-5">
                  <button type="submit" className="btn btn-dark btn-lg">Add</button>
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
