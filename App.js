//CREATE A MANY PAGE AND INSTALL REACT-ROUTER-DOM AND AFTER THAN LINKING THA PAGE==========================

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from "./components/About";
import Contact from "./components/Contact";
import Placeholder from "./components/Placeholder";
import './App.css';

function App() {
    return (
        <div>

            <Router>
                <Navbar bg="warning" variant="dark" sticky="top">
                    <Container>
                        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                        <Nav className="justify-content-end">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/placeholder">Placeholder</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/placeholder" element={<Placeholder />} />
                    </Routes>
                </div>
                {/* <Footer /> */}
            </Router>
        </div>
    );
}

export default App;







