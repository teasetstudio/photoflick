import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import {
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.scss";

const Header = () => {
  const location = useLocation().pathname === "/" ? "search" : "bookmarks";
  const [activeLink, setActive] = useState<string>(location);
  const [menuCollapse, setMenuCollapse] = useState(true);
  const menuIconClick = () =>
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);

  return (
    <div id="sidebar">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <br />
          <br />
          <button type="button" className="closemenu" onClick={menuIconClick}>
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </button>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem
              active={activeLink === "search" ? true : undefined}
              onClick={() => setActive("search")}
              icon={<FaSearch />}
            >
              Search
              <Link to="/" />
            </MenuItem>
            <MenuItem
              active={activeLink === "bookmarks" ? true : undefined}
              onClick={() => setActive("bookmarks")}
              icon={<FaRegHeart />}
            >
              Bookmarks
              <Link to="/bookmarks" />
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Header;
