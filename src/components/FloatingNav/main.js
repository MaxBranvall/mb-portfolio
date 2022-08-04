import { Text } from "@chakra-ui/react";
import { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
  } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

import { Heading, Box, Flex, Link, HStack, useColorMode} from "@chakra-ui/react";

import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import './main.css';

function FloatingNav() {

    const [showNav, changeNav] = useState(true);

    const [test, testing] = useState("home");
    const duration = 500;

    const nav =
    <Menu>

        <MenuButton
            as={IconButton}
            aria-label="Navigation"
            icon={<HamburgerIcon />} />            
        <MenuList>

            <MenuItem>
                <ScrollLink id="homeLink" activeClass={test} className="homePage" to="homePage" spy={true} smooth={true} duration={duration}>
                    <Link color="black">Home</Link>
                </ScrollLink>
            </MenuItem>

            <MenuItem>
                <ScrollLink activeClass="active" className="aboutMePage" to="aboutMePage" spy={true} smooth={true} duration={duration}>
                    <Link color="black">About Me</Link>
                </ScrollLink>
            </MenuItem>

            <MenuItem>
                <ScrollLink activeClass="active" className="showcasePage" to="showcasePage" spy={true} smooth={true} duration={duration}>
                    <Link color="black">Projects</Link>
                </ScrollLink>
            </MenuItem>

            <MenuItem>
                <ScrollLink activeClass="active" className="educationPage" to="educationPage" spy={true} smooth={true} duration={duration}>
                    <Link color="black">Education</Link>
                </ScrollLink>
            </MenuItem>

        </MenuList>

    </Menu>

    return (

        <Box position="sticky" top="100px" m="0" id="floatingNav" className="nav" zIndex="10">
            {nav}
        </Box>


    )

};

export default FloatingNav;