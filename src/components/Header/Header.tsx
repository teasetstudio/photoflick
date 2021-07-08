import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import { FaPhotoVideo } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar color="warning" light expand="md">
      <NavbarBrand tag={RRNavLink} to="/">
        <FaPhotoVideo />
        <span>PhotoFlick</span>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
