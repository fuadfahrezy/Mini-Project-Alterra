import React from 'react'
import './Post.css'
import { Link } from "react-router-dom";
import palembang from "../../assets/img/palembang.jpg"

const Post = () => {
  return (
    <>
    <div className='post'>
      <div className="container mt-5">
        <div className="row">
          <h2 className="mb-3">TEMPAT WISATA</h2>
          <div className="card">
            <div className="w-100 d-flex align-items-center justify-content-start">
              <div className="w-20">
                <Link to="#" className="images">
                  <img src={palembang} className="card-img-top gambar" />
                </Link>
              </div>
              <div className="w-60 card-body">
                <p className="title-place">Jembatan Ampera</p>
                <p className="deskripsi">Jembatan Ampera adalah sebuah jembatan di Kota Palembang, Provinsi Sumatra Selatan, Indonesia. Jembatan Ampera, yang telah menjadi semacam lambang kota, terletak di tengah-tengah Kota Palembang, menghubungkan daerah Seberang Ulu dan Seberang Ilir yang dipisahkan oleh Sungai Musi.</p>
              <button type="button" className="btn btn-light rounded shadow float-end">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Post