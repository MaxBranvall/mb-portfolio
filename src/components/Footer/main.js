
import { Box, Heading, Text, Flex, Grid, GridItem, Icon, Link } from "@chakra-ui/react";
import { SiReact, SiChakraui } from "react-icons/si"

function Footer() {
    return(

        <Box bgColor="#2f3441" h="10vh">
            
            <Flex h="100%" justifyContent="space-evenly" alignItems="center" flexFlow="column">
                <Text color="white">Built with React and Chakra UI</Text>                
                <Flex gridGap="1em"> 
                    <Link href="https://reactjs.org/">
                        <Icon as={SiReact} h={30} w={30} color="#61dafb" /> 
                    </Link>
                    <Link href="https://chakra-ui.com/"> 
                        <Icon as={SiChakraui} h={30} w={30} color="#41c7bf" /> 
                    </Link>
                </Flex>
            </Flex>

        </Box>

    )
}

export default Footer;