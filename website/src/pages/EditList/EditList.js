import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLists, listSelectors, updateLists } from "../../redux/listSlice";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './EditList.css'

const EditList = () => {
  const [namaTempat, setNamaTempat] = useState('');
  const [asal, setAsal] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [detail, setDetail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  const list = useSelector((state) => listSelectors.selectById(state, id));

  useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);
  
  useEffect(() => {
    if (list) {
      setNamaTempat(list.namaTempat);
      setAsal(list.asal);
      setDetail(list.detail);
      setDeskripsi(list.deskripsi);
    }
  }, [list]);

  const updateHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateLists({id, namaTempat, asal, deskripsi, detail}));

    Swal.fire(
      'Data Berhasil di Update',
      '👍👍👍',
      'success'
    )
    // alert("Sudah di update");
    navigate('/list');
  };

  return (
    <div className="EditList">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h2 className="text-center my-5">EDIT PLACE</h2>
            <div className="card-add">
              <form onSubmit={updateHandler} className="form-add">
              <div className="mt-3">
                  <label className="form-label">Nama Tempat</label>
                  <input required type="text"
                  name='namaTempat'
                  placeholder="Masukkan nama tempat..." 
                  className="form-control" 
                  value={namaTempat}
                  onChange={(e) => setNamaTempat(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label">Asal Tempat</label>
                  <input required type="text"
                  name='asal'
                  placeholder="Masukkan asal tempat..."  
                  className="form-control"
                  value={asal}
                  onChange={(e) => setAsal(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label">URL</label>
                  <input required type="text"
                  name='url'
                  placeholder="Masukkan url gambar tempat..." 
                  className="form-control" 
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="form-label">Deskripsi</label>
                  <textarea required 
                  className="form-control"
                  name='deskripsi'
                  placeholder="Masukkan deskripsi..." 
                  rows="6" 
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  />
                </div>
                <div className=" d-grid gap-2 my-5">
                  <button type="submmit" className="btn btn-dark btn-lg">Update</button>
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

export default EditList;
