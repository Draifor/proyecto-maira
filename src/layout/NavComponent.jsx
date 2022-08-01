import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  useBreakpointValue
} from "@chakra-ui/react";

import HamburgerMenu from "../components/HamburgerMenu";
const menuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Pergola",
    link: "/pergola",
  },
  {
    name: "Fencing",
    link: "/fencing",
  },
  {
    name: "Window",
    link: "/window",
  },
  {
    name: "Sliding Gate",
    link: "/slidinggate",
  },
  {
    name: "Swing Gate",
    link: "/swinggate",
  },
  {
    name: "Gate",
    link: "/gate",
  },
  {
    name: "Front Door",
    link: "/frontdoor",
  },
];

export default function NavComponent() {
  const largeMenu = menuItems.map((item, index) => (
    <BreadcrumbItem key={index} my='5px'>
      <BreadcrumbLink as={Link} to={item.link}>
        <Button variant="my-style">{item.name}</Button>
      </BreadcrumbLink>
    </BreadcrumbItem>
  ));

  const smallMenu = <HamburgerMenu menuItems={menuItems}/>

  const menu = useBreakpointValue({sm: smallMenu, lg: largeMenu});
  return (
      <Breadcrumb separator="">
        {menu}
      </Breadcrumb>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
// import { useRef } from "react";
// import { useDisclosure } from "@chakra-ui/react";
// import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useMemo } from "react";
// import { useCallback } from "react";
// import { useLayoutEffect } from "react";
// import { useReducer } from "react";
// import { useRef } from "react";
// import { useImperativeHandle } from "react";
// import { useEffect } from

