import React from 'react'
import palembang from "../../assets/img/palembang.jpg"
import './style.css'

const Ampera = () => {
  return (
    <div className="konten">
        <div className="container">
          <div className="row">
            <div className="text-center mt-2 mb-3">
              <h2 className="h2-about">Jembatan Ampera</h2>
            </div>
              <div className="col-md-6 mt-3">
                <img src={palembang} className="img-fluid img-konten"/>
              </div>
              <div className="col-md-6 mt-2">
                <p className="text-konten">Jembatan Ampera adalah sebuah jembatan di Kota Palembang, Provinsi Sumatra Selatan, Indonesia. Jembatan Ampera, yang telah menjadi semacam lambang kota, terletak di tengah-tengah Kota Palembang, menghubungkan daerah Seberang Ulu dan Seberang Ilir yang dipisahkan oleh Sungai Musi.</p>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Ampera