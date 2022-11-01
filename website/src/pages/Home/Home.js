import React from 'react'
import { Header } from '../../components'
import './Home.css'
import about from '../../assets/img/about.jpg'
import jason from '../../assets/img/jason.jpg'
import susan from '../../assets/img/susan.jpg'
import sarah from '../../assets/img/sarah.jpg'

const Home = () => {
  return (
    <>
    <Header/>
    <div className="about">
        <div className="container">
          <div className="row">
            <div className="text-center mt-2 mb-3">
              <h2 className="h2-about">ABOUT</h2>
            </div>
              <div className="col-md-6 mt-3">
                <img src={about} className="img-fluid img-about"/>
              </div>
              <div className="col-md-6">
                <p className="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
          </div>
        </div>
      </div>

      <div className="teams">
        <div className="container ">
          <div className="row">
            <h2 className="text-center pb-5">Here Is Our Teams</h2>
            <div className="col-md-4">
              <div className="card card-team">
                <img src={sarah} className="card-img-top people" />
                <div className="card-body text-center">
                  <h5 className="card-title">Sarah</h5>
                  <p className="card-text">FrontEnd Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-team">
                <img src={susan} className="card-img-top people" />
                <div className="card-body text-center">
                  <h5 className="card-title">Susan</h5>
                  <p className="card-text">FrontEnd Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-team">
                <img src={jason} className="card-img-top people" />
                <div className="card-body text-center">
                  <h5 className="card-title">John</h5>
                  <p className="card-text">FrontEnd Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home