import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLists, listSelectors, updateLists } from "../../redux/listSlice";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditList = () => {
  const [namaTempat, setNamaTempat] = useState('');
  const [negara, setNegara] = useState('');
  const [alamat, setAlamat] = useState('');
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
      setNegara(list.negara);
      setDetail(list.detail);
      setAlamat(list.alamat);
    }
  }, [list]);

  const updateHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateLists({id, namaTempat, negara, alamat, detail}));

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
            <h2 className="text-center my-5">EDIT LIST</h2>
            <div className="card-add">
              <form onSubmit={updateHandler} className="form-add">
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
