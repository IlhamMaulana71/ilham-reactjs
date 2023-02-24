import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";

const Bootstrap = () => {
    return(
        <div>
            <Navbar bg="black" variant="black">
                <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="#LandingPage">
                                <div className="text-primary">porto.id</div>
                            </Nav.Link>
                        </Nav>
                            <ul className="navbar-nav ms-auto ">
                                <Nav.Link href="#Home">
                                    <div className="text-white">Home</div>
                                </Nav.Link>
                                <Nav.Link href="#Biografi">
                                    <div className="text-white">Biografi</div>
                                </Nav.Link>
                                <Nav.Link href="#Contact">
                                    <div className="text-white">Contact</div>
                                </Nav.Link>
                            </ul>
                </Container>
            </Navbar>
            <center>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div class="card bg-black text-white" style={{maxWidth: '840px'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://raw.githubusercontent.com/dewdot/react-portfolio-template/c0b3a9263af4a5ca0b958c8f08945f68794bcf64/public/images/intro.svg" alt=" logo" style={{ width: '400px', }}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <p className="weight-light">Hello, My name is</p>
                            <h1 className="text-primary">Ilham Maulana</h1>
                            <h3 className="card-text">Full Stack Developer</h3>
                                    <p>
                                        <span className="text-primary">#</span>
                                            <small class="text-muted">MongoDB</small>
                                        <span className="text-primary">#</span>
                                            <small class="text-muted">Express</small>
                                        <span className="text-primary">#</span>
                                            <small class="text-muted">React</small>
                                        <span className="text-primary">#</span>
                                            <small class="text-muted">Node</small>
                                    </p>
                        </div>
                </div>
            </div>
            </div>
            </center>

        </div>
    )
}

export default Bootstrap
