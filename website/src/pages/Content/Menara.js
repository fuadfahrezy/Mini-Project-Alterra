import React from 'react'
import './style.css'
import menara from '../../assets/img/eiffel.jpg'

const Menara = () => {
  return (
    <div className="konten">
        <div className="container">
          <div className="row">
            <div className="text-center mt-2 mb-3">
              <h2 className="h2-about">Menara Eiffel</h2>
            </div>
              <div className="col-md-6 mt-3">
                <img src={menara} className="img-fluid img-konten"/>
              </div>
              <div className="col-md-6 mt-2">
                <p className="text-konten">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Menara