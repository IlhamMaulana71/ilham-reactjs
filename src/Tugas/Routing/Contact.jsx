import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };
  
const Contact = () => {
    return (
        <div>
        <Navbar bg="black" variant="black">
            <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">
                            <div className="text-primary">porto.id</div>
                        </Nav.Link>
                    </Nav>
                        <ul className="navbar-nav ms-auto ">
                            <Link to="/" style={linkStyle}>
                                <div className="text-white">Home</div>
                            </Link>
                            <Link to="/contact" style={linkStyle}>
                            <div className="text-white">Contact</div>
                            </Link>
                            <Link to="/about" style={linkStyle}>
                            <div className="text-white">About</div>
                            </Link>
                        </ul>
            </Container>
        </Navbar>
          <br />
          <div class="card bg-black text-white" style={{width: '85rem'}}>
            <div id="contact" className="section dark2">
              <div className="container contact">
                <div className="section-title">
                  <h1>Contact <span className="color-primary">Me</span></h1>
                  <p className="width70">Feel free to get in touch with me. I am always open to discuss new projects, creative ideas or opportunities to be part of your visions.</p>
                </div>
                <hr />
                <div className="column contact-box">
                  <h3>Email</h3>
                  <i className="bi bi-envelope icon"></i>
                  <p>ilhammlna340@gmail.com</p>
                </div>
                <hr />
                <div className="column contact-box">
                  <h3>Call Me</h3>
                  <i className="bi bi-telephone-inbound icon"></i>
                  <p>+62-83149333730</p>
                </div>
                <hr />
                <div className="columns">
                <div className="column contact-box">
                  <h3>Address</h3>
                  <i className="bi bi-map icon"></i>
                  <p>Bandung, West Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
    </div>
        
    )
}

export default Contact;