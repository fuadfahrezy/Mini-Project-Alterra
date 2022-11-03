import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLists, listSelectors, deleteLists } from '../../redux/listSlice';
import { Link } from 'react-router-dom'

const List = () => {
    const dispatch = useDispatch();
    const lists = useSelector(listSelectors.selectAll);

    useEffect(() => {
        dispatch(getLists());
    }, [dispatch]);
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
                        {lists.map((list, index) => (
                        <tr key={list.id}>
                            <td>{index + 1}</td>
                            <td>{list.namaTempat}</td>
                            <td>{list.negara}</td>
                            <td>{list.alamat}</td>
                            <td>
                                {/* <img src={list.detail} className="img-fluid" width="100px" /> */}
                                <Link to={list.detail} type="button" className="btn btn-light rounded shadow">Detail</Link>
                            </td>
                            <td>
                                <Link to={`/edit/${list.id}`} className="btn btn-light rounded shadow">Edit</Link>
                                <button onClick={() => dispatch(deleteLists(list.id))} className="btn btn-light rounded shadow">Delete</button>
                            </td>
                        </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default List