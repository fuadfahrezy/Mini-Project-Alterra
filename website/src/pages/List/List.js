import React, { useState ,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLists, listSelectors, deleteLists } from "../../redux/listSlice";
import { Link } from "react-router-dom";
import './style.css'

const List = () => {
  const dispatch = useDispatch();
  const lists = useSelector(listSelectors.selectAll);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);
  return (
    <div className="list">
      <div className="container pt-5">
        <div className="row">
          <h1 className="mb-5 text-center">
            TEMPAT WISATA YANG RAMAI DIKUNJUNGI
          </h1>
          <div className="col-md-2"></div>
          <div className="col-md-8">
          <input className="form-control form-search mb-5"
          type="text" 
          placeholder="Seach..."
          onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="col-md-2"></div>
          {lists.filter(list=>list.namaTempat.toLowerCase().includes(search)).map((list) => {
            // const { namaTempat, asal, deskripsi, detail } = list;
            return (
              <div key={list.id} className="card card-place">
                <div className="w-100 d-flex align-items-center justify-content-start">
                  <div className="w-40">
                    <img src={list.detail} className="card-img-top gambar" />
                  </div>
                  <div className="w-60 card-body">
                    <p className="title-place">{list.namaTempat}</p>
                    <p className="asal">{list.asal}</p>
                    <p className="deskripsi">{list.deskripsi}</p>
                    <Link
                      to={`/edit/${list.id}`}
                      className="btn btn-light rounded shadow"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => dispatch(deleteLists(list.id))}
                      className="btn btn-light rounded shadow"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <table className='table text-center'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Tempat</th>
                            <th>Negara</th>
                            <th>Alamat</th>
                            <th>Detail</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lists.map((list, index) => (
                        <tr key={list.id}>
                            <td>{index + 1}</td>
                            <td>{list.namaTempat}</td>
                            <td>{list.negara}</td>
                            <td>{list.deskripsi}</td>
                            <td>
                                img jgn diubah
                                <img src={list.detail} className="img-fluid" width="100px" />
                                <Link to={list.detail} type="button" className="btn btn-light rounded shadow">Detail</Link>
                            </td>
                            <td>
                                <Link to={`/edit/${list.id}`} className="btn btn-light rounded shadow">Edit</Link>
                                <button onClick={() => dispatch(deleteLists(list.id))} className="btn btn-light rounded shadow">Delete</button>
                            </td>
                        </tr>

                        ))}
                    </tbody>
                </table> */}
        </div>
      </div>
    </div>
  );
};

export default List;
