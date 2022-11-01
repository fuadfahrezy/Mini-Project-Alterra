import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div className="list">
        <div className='container mt-5'>
            <div className='row'>
                <h2 className='h2-list mb-5 text-center'>TEMPAT WISATA YANG RAMAI DIKUNJUNGI</h2>
                <table className='table text-center'>
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

                        <tr>
                            <td>1</td>
                            <td>Jembatan Apera</td>
                            <td>Indonesia</td>
                            <td>Palembang</td>
                            <td>
                                <Link to="/post" type="button" className="btn btn-light rounded shadow">Detail</Link>
                            </td>
                            <td>
                            <Link to="/edit" type="button" className="btn btn-light rounded shadow mx-2">Edit</Link>
                            <Link to="/post" type="button" className="btn btn-light rounded shadow mx-2">Detail</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default List