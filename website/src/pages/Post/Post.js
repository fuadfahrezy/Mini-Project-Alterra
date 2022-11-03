import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLists, listSelectors, deleteLists } from '../../redux/listSlice';
import './Post.css'
import { Link } from "react-router-dom";
import palembang from "../../assets/img/palembang.jpg"
import menara from "../../assets/img/eiffel.jpg"
import monas from "../../assets/img/monas.jpg"

const Post = () => {
  const dispatch = useDispatch();
    const lists = useSelector(listSelectors.selectAll);

    useEffect(() => {
        dispatch(getLists());
    }, [dispatch]);
  return (
    <>
    <div className='post'>
      <div className="container mt-5">
        <div className="row">
          <h2 className="mb-3">TEMPAT WISATA</h2>
          <div className="card">
            <div className="w-100 d-flex align-items-center justify-content-start">
              <div className="w-20">
                <Link to="/content/ampera" className="images">
                  <img src={palembang} className="card-img-top gambar" />
                </Link>
              </div>
              <div className="w-60 card-body">
                <p className="title-place">Jembatan Ampera</p>
                <p className="deskripsi">Jembatan Ampera adalah sebuah jembatan di Kota Palembang, Provinsi Sumatra Selatan, Indonesia. Jembatan Ampera, yang telah menjadi semacam lambang kota, terletak di tengah-tengah Kota Palembang, menghubungkan daerah Seberang Ulu dan Seberang Ilir yang dipisahkan oleh Sungai Musi.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="w-100 d-flex align-items-center justify-content-start">
              <div className="w-20">
                <Link to="/content/menara" className="images">
                  <img src={menara} className="card-img-top gambar" />
                </Link>
              </div>
              <div className="w-60 card-body">
                <p className="title-place">Jembatan Ampera</p>
                <p className="deskripsi">Jembatan Ampera adalah sebuah jembatan di Kota Palembang, Provinsi Sumatra Selatan, Indonesia. Jembatan Ampera, yang telah menjadi semacam lambang kota, terletak di tengah-tengah Kota Palembang, menghubungkan daerah Seberang Ulu dan Seberang Ilir yang dipisahkan oleh Sungai Musi.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="w-100 d-flex align-items-center justify-content-start">
              <div className="w-20">
                <Link to="/content/monas" className="images">
                  <img src={monas} className="card-img-top gambar" />
                </Link>
              </div>
              <div className="w-60 card-body">
                <p className="title-place">Jembatan Ampera</p>
                <p className="deskripsi">Jembatan Ampera adalah sebuah jembatan di Kota Palembang, Provinsi Sumatra Selatan, Indonesia. Jembatan Ampera, yang telah menjadi semacam lambang kota, terletak di tengah-tengah Kota Palembang, menghubungkan daerah Seberang Ulu dan Seberang Ilir yang dipisahkan oleh Sungai Musi.</p>
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