import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const NavbarWrapper = styled.div`
.nav{
    display: flex;
    gap: 20vw;
    padding-left: 10%;
    background-color: aliceblue;
    box-shadow: 10px 5px 5px #cecece;
}
`

function Navbar() {
    const isAuth = useSelector((state) => state.isAuth)
    return(
        <NavbarWrapper>
            <div className="nav">
                <Link to={'/home'}><h3 className="home">HOME</h3></Link>
                <Link to={'/login'}><h3 className="home">{ isAuth ? "LOGOUT" : "LOGIN" }</h3></Link> 
                <Link to={'/register'}><h3 className="home">REGISTER</h3></Link>
                <Link to={'/employees'}><h3 className="home">EMPLOYEES</h3></Link>
            </div>
        </NavbarWrapper>
    )
}

export { Navbar }