import { Box, Button, Image, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { navMenuList } from "../constant";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* <Image /> */}
      <Text c="white" fw="bold">ReactUi</Text>
      <ul className="list-wrapper">
        {navMenuList.map((menu) => (
          <li style={{marginLeft:"12px"}}>
            <Link to={menu?.path}>{menu?.name}</Link>
          </li>
        ))}
      </ul>
      {/* <Button>Get Started</Button> */}
    </nav>
  );
};

export default NavBar;
