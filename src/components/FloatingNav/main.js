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

    const [test, testing] = useState(false);

    const x =
    <ScrollLink activeClass={test} className="aboutMePage" to="aboutMePage" spy={true} smooth={true} duration={500}>
        <Link color="black">About Me</Link>
    </ScrollLink>

    const nav =
    <Menu>

        <MenuButton
            as={IconButton}
            aria-label="Navigation"
            icon={<HamburgerIcon />} />
        <MenuList>

            <MenuItem className={x.props.className}>
            {x}
            </MenuItem>

            <MenuItem>
                <ScrollLink activeClass="active" className="showcasePage" to="showcasePage" spy={true} smooth={true} duration={500}>
                    <Link color="black">Showcase</Link>
                </ScrollLink>
            </MenuItem>

            <MenuItem>
                <ScrollLink activeClass="active" className="educationPage" to="educationPage" spy={true} smooth={true} duration={500}>
                    <Link color="black">Education</Link>
                </ScrollLink>
            </MenuItem>

        </MenuList>

    </Menu>

    return (

        <Box position="sticky" top="100px" m="0" zIndex="20" >
            {console.log(x.props.className)}
            {nav}
        </Box>


    )

};

export default FloatingNav;