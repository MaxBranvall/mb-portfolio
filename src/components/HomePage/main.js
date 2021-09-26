
import { ExternalLinkIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Heading, Box, Flex, Link, HStack, useColorMode} from "@chakra-ui/react";

function HomePage() {

    return(

        <div>
            <Box bgImage="url('/bg.jpg')" bgSize="cover" h="100%" textAlign="center" position="relative">
                <Box bgColor="black" opacity="0.5" h="100%" w="100%" position="absolute" zIndex="1" />

                <Flex direction="column" h="100vh" justify="center" zIndex="20" marginRight="0">
                    <Heading as="h1" size="3xl" color="white" zIndex="inherit">
                        Maxwell J Branvall
                    </Heading>
                    <Heading as="h3" size="xl" color="white" mt="1em" mb="0.5em" zIndex="inherit">
                        Software developer.
                    </Heading>
                    <HStack justifyContent="center" spacing="1em" fontSize="xl" zIndex="inherit">
                        <Link color="white">About Me</Link>
                        <Link color="white">Showcase</Link>
                        <Link color="white">Education</Link>
                        <Link color="white" isExternal>Github <ExternalLinkIcon /></Link>
                    </HStack>
                </Flex>
            </Box>
        </div>
    )

}

export default HomePage;