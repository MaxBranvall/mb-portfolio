
import { ExternalLinkIcon, MoonIcon } from "@chakra-ui/icons";
import { Heading, Box, Center, Flex, Spacer, Link, HStack, Divider } from "@chakra-ui/react";


function PageHeader() {

    return(

        <div>
            <Box bg="black" bgImage="url('../../../bg.jpg')" h="100%">
                {/* <Flex justify="flex-end">
                    <MoonIcon w={8} h={8} m={5} color="purple"  />
                </Flex> */}

                {/* <MoonIcon w={8} h={8} color="purple" mt={5} mr={5} float="right" /> */}
                <Flex direction="column" h="100vh" justify="center">
                    <Heading as="h1" size="3xl" color="white">
                        Maxwell J Branvall
                    </Heading>
                    <Heading as="h3" size="xl" color="white" mt="1em" mb="0.5em">
                        Software developer.
                    </Heading>
                    <HStack justifyContent="center" spacing="1em" fontSize="xl">
                        <Link color="white">About Me</Link>
                        <Link color="white">Showcase</Link>
                        <Link color="white">Education</Link>
                        <Link color="white" isExternal>Github <ExternalLinkIcon /></Link>
                    </HStack>
                </Flex>
            </Box>
            <Box bg="blue" h="100vh">
                <Heading>Second Section</Heading>
            </Box>
        </div>

    )

}

export default PageHeader;