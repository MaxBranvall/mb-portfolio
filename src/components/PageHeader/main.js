
import { MoonIcon } from "@chakra-ui/icons";
import { Heading, Box, Center, Flex, Spacer } from "@chakra-ui/react";


function PageHeader() {

    return(

        <div>
            <Box bg="black" h={[300, 400, 500]}>
                {/* <Flex justify="flex-end">
                    <MoonIcon w={8} h={8} m={5} color="purple"  />
                </Flex> */}
                <Flex direction="column" h="100%" justify="center">
                    <Heading as="h1" size="3xl" color="white">
                        Maxwell J Branvall
                    </Heading>
                    <Heading as="h3" size="xl" color="white" mt="1em">
                        Software developer.
                    </Heading>
                </Flex>
            </Box>
            <Box>
                <Heading>Second Section</Heading>
            </Box>
        </div>

    )

}

export default PageHeader;