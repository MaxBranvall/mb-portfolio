
import { ExternalLinkIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Heading, Box, Flex, Link, HStack, useColorMode} from "@chakra-ui/react";

import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function HomePage() {

    return(
        <Box id="homePage" bgImage="url('/bg.jpg')" bgSize="cover" h="100%" textAlign="center" position="relative">
            <Box bgColor="black" opacity="0.5" h="100%" w="100%" position="absolute" zIndex="1" />

            <Flex direction="column" h="100vh" justify="center" zIndex="25" marginRight="0">
                <Heading as="h1" size="3xl" color="white" zIndex="inherit">
                    Maxwell J Branvall
                </Heading>
                <Heading as="h3" size="xl" color="white" mt="1em" mb="0.5em" zIndex="inherit">
                    Software developer.
                </Heading>
                <HStack justifyContent="center" spacing="1em" fontSize="xl" zIndex="inherit">

                    <ScrollLink activeClass="active" className="aboutMePage" to="aboutMePage" spy={true} smooth={true} duration={500}>
                        <Link color="white"> About Me</Link>
                    </ScrollLink>

                    <ScrollLink activeClass="active" className="showcasePage" to="showcasePage" spy={true} smooth={true} duration={500}>
                        <Link color="white">Showcase</Link>
                    </ScrollLink>

                    <ScrollLink activeClass="active" className="educationPage" to="educationPage" spy={true} smooth={true} duration={500}>
                        <Link color="white">Education</Link>
                    </ScrollLink>

                    <Link color="white" href="https://github.com/MaxBranvall" isExternal>Github <ExternalLinkIcon /></Link>

                </HStack>
            </Flex>
        </Box>
    )

}

export default HomePage;