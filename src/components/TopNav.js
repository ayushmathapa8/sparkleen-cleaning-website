import React from "react";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalMsg } from "./GlobalMsg";

export const TopNav = () => {
  return (
    <>
      <GlobalMsg />
      <Navbar expand="md" className="topNav" id="navbar" collapseOnSelect>
        <Container>
          <Link to="/" className="logo">
            Sparkleen
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About Us
              </Link>
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
              <Link className="nav-link" to="/services">
                Services
              </Link>

              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

  // return (
  //   <div id="navbar" class="topNav">
  //     <nav class="navbar navbar-expand-md bg-none">
  //       <div class="container">
  //         <a class="navbar-brand" href="#">
  //           <img src={logo} alt="logo" width="60px" />
  //         </a>
  //         <button
  //           class="navbar-toggler"
  //           type="button"
  //           data-bs-toggle="collapse"
  //           data-bs-target="#navbarSupportedContent"
  //           aria-controls="navbarSupportedContent"
  //           aria-expanded="false"
  //           aria-label="Toggle navigation"
  //         >
  //           <span class="navbar-toggler-icon"></span>
  //         </button>
  //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //           <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
  //             <li class="nav-item">
  //               <a class="nav-link active" aria-current="page" href="#skills">
  //                 Skills
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#projects">
  //                 Projects
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#about">
  //                 About Me
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#contact">
  //                 Contact
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </div>
  // );
};
