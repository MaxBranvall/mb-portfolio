
import { Box, Heading, Text, Button, PopoverHeader } from "@chakra-ui/react";
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";

function ProjectsPage() {

    return (

        <Box id="showcasePage" h="100vh" bg="green.400" background="linear-gradient(to left bottom, #2f3441 50%, #212531 50%)" textAlign="center">

            <Heading variant="mainHeader">Projects</Heading>


            <Text color="white">GTA-Cursor, Momscookbook, WinMixerDeck, try and finish autodirectory, maybe build maintnence minder site</Text>

            <Popover>
                <PopoverTrigger>
                    <Button>Project One</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>The header</PopoverHeader>
                    <PopoverBody>Body of popover</PopoverBody>
                </PopoverContent>
            </Popover>

        </Box>

    )

}

export default ProjectsPage;
