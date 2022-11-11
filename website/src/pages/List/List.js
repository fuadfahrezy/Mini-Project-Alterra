import React, { useState ,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLists, listSelectors, deleteLists } from "../../redux/listSlice";
import { Link } from "react-router-dom";
import './style.css'

const List = () => {
  const dispatch = useDispatch();
  const lists = useSelector(listSelectors.selectAll);
  const [search, setSearch] = useState("");

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
          placeholder="Search..."
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
        </div>
      </div>
    </div>
  );
};

export default List;
