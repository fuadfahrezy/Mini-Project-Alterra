import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
 
const Footer = () => {
  return (
    <>
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-2 item">
                        <h3>MY WEBSITE</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/list">Place</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-2 item2">
                        <h3>Social Media</h3>
                        <ul>
                            <li><Link to="#">Facebook</Link></li>
                            <li><Link to="#">Instagram</Link></li>
                            <li><Link to="#">Linkedln</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-8 item text">
                        <h3>Company Mini Project</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    
                </div>
                <p class="copyright">Company <strong>Mini Project</strong> 2022</p>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Footer