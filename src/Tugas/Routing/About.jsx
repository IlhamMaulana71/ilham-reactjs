import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };

const About = () => {
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
        <div class="card bg-black text-white" style={{width: '84rem'}}>
            <div id="about" className="section dark2">
                <div className="container">
                    <div className="section-title">
                        <h1>About <span className="color-primary">Me</span></h1>
                    </div>
                    <div className="section-flex">
                        <div className="section-right">
                            <section >
                                <h2 className="weight-light">Hi, I'm <span className="color-primary">Ilham Maulana</span></h2>
                                    <p>I am a full stack developer. I code and build stylish, modern websites, web services, mobile apps, and online stores. My passion is designing digital user experiences through meaningful interactions.</p>
                            </section>
                            <hr />
                            <section>
                                    <h2 className="weight-light">Personal <span className="color-primary">Info</span></h2>
                                <div>
                                    <p><strong>Name:</strong> Ilham Maulana</p>
                                    <p><strong>Age:</strong> 18 years</p>
                                    <p><strong>Language:</strong> Indonesia</p>
                                    <p><strong>Address:</strong>Bandung, West Java</p>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <h2 className="weight-light">My <span className="color-primary">Skills</span></h2>
                            <section>HTML, CSS, </section>
                        <hr />
                            <section>JavaScript, ReactJS</section>
                        <hr />
                            <section> MongoDB,Express,React, Nodejs</section>
                </div>
            </div>
        </div>

    </div>
            </div>
        
        <Outlet />
    </div>
        
    )
}

export default About;