import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/llog.png'
import { signout } from "../../Actions/auth.actions";
import "./style.css";
const Navbare = () => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  console.log('AAUSER',user)
  console.log('AAAUTH',auth)
  const logout=()=>{
    dispatch(signout())
  }

  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        {/* <NavLink className="non" to="/signup">
          <li className="nav-item">
            <span className="nav-link nname"><strong>Sign up</strong></span>
          </li>
        </NavLink> */}
        <NavLink className="non" to="/signin">
          <li className="nav-item">
            <span className="nav-link nname"><strong>Connect to Metamask</strong></span>
          </li>
        </NavLink>
      </Nav>
    );
  };
  const renderLoggedInLinks = () => {
    return (
      <Nav className='nname'>
        <NavDropdown color='black' title={auth.user.firstName} id="collasible-nav-dropdown">
          <NavDropdown.Item>
            <NavLink className="non" to="/dashboard">
              Dashboard
            </NavLink>
          </NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container className='cont' fluid>
        <img src={logo} className="logo"/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ backgroundColor: "white" }}>
            <Nav className="me-auto">
              <NavLink className="non" to="/">
                <li className="nav-item">
                  <span className="nav-link nname"><strong>Home</strong></span>
                </li>
              </NavLink>
              <NavLink className="non" to="/marketplace">
                <li className="nav-item">
                  <span className="nav-link nname"><strong>Market Place</strong></span>
                </li>
              </NavLink>
              <NavLink className="non" to="/blog">
                <li className="nav-item">
                  <span className="nav-link nname"><strong>Blog</strong></span>
                </li>
              </NavLink>
              <NavLink className="non" to="/metamask">
                <li className="nav-item">
                  <span className="nav-link nname"><strong>Sell Tokens</strong></span>
                </li>
              </NavLink>
              
            </Nav>
            {/* last  */}

            <Nav>
              {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

  // return (
  //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  //       <Container>
  //         <Link className="navbar-brand" to="/">CarT</Link>
  //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //         <Navbar.Collapse id="responsive-navbar-nav">
  //           <Nav className="me-auto">
  //           <Link to='/'>
  //             <li className="nav-item">
  //                 <span className="nav-link non" >
  //                   Home
  //                 </span>
  //               </li>
  //           </Link>
  //           <Link to='/marketplace'>
  //             <li className="nav-item">
  //                 <span className="nav-link non">
  //                   Market Place
  //                 </span>
  //               </li>
  //           </Link>
  //           <Link to='/selltoken'>
  //             <li className="nav-item">
  //                 <span className="nav-link non">
  //                   Sell Token
  //                 </span>
  //               </li>
  //           </Link>
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  // );

  // return (
  //   <div className="main">
  //     <div className="forLogo">
  //       <div className="tt">
  //         <Link className="Text" to="/"><span>CarT</span></Link>
  //       </div>
  //     </div>
  //     <div className="forLinks">
  //       <div className="tt">
  //         <Link className="Text"  to="/">Home</Link>
  //       </div>
  //       <div className="tt">
  //         <Link className="Text" to="/marketplace">Market Place</Link>
  //       </div>
  //       <div className="tt">
  //         <Link className="Text" to="/selltoken">Sell Token</Link>
  //       </div>
  //     </div>
  //     <div className="forMetaMask">
  //       <div className="tt">
  //         <span className="TextM">Connect To MetaMask</span>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Navbare;
