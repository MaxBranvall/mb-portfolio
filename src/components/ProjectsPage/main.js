
import { Box, Heading, Text, Button, PopoverHeader, Flex, Link } from "@chakra-ui/react";
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";

function ProjectsPage() {

    return (

        <Box id="showcasePage" h="100vh" bg="green.400" background="linear-gradient(to left bottom, #2f3441 50%, #212531 50%)" textAlign="center">

            <Heading variant="mainHeader">Projects</Heading>

            <Flex>
                <Box p="3%" position="relative">
                    <Box position="absolute" height="100%" bgColor="blue.400" borderRadius="15" opacity="0.7" top="0" left="0" w="100%"/>
                    <Box position="relative" zIndex="2">
                        <Text>WinMixerDeck</Text>
                        <Link>Repo</Link>
                        <Text>Description</Text>
                        <Text>Technologies Used</Text>
                    </Box>
                </Box>
            </Flex>

            {/* <Text color="white">GTA-Cursor, Momscookbook, WinMixerDeck, try and finish autodirectory, maybe build maintnence minder site</Text> */}

            {/* <Flex justifyContent="space-around">
                <Popover>
                    <PopoverTrigger>
                        <Button>WinMixerDeck</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>The header</PopoverHeader>
                        <PopoverBody>Body of popover</PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <Button>Trigger</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Header</PopoverHeader>
                        <PopoverBody>Body of popover</PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <Button>Trigger</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Header</PopoverHeader>
                        <PopoverBody>Body of popover</PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <Button>Trigger</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Header</PopoverHeader>
                        <PopoverBody>Body of popover</PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex> */}

        </Box>

    )

}

export default ProjectsPage;
