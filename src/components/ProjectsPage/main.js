
import { Box, Heading, Text, Button, PopoverHeader, Flex, Link, HStack, Icon, Spacer } from "@chakra-ui/react";
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";
import { SiCsharp, SiCss3, SiHtml5, SiJavascript } from "react-icons/si"

function ProjectsPage() {

    const responsiveText = {base: "xl", md: "2xl", xl: "4xl"}
    const responsiveDisplay = {base: "none", md: "flex"}
    const responsiveDisplay2 = {base: "flex", md: "none", xl: "none"}
    const iconSize = "40px";

    var projects = []
    var projectJSXdesktop = []
    var projectJSXmobile = []

    let winMixerDeck = {
        title: "WinMixerDeck",
        repoLink: "https://github.com/MaxBranvall/WinMixerDeck",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium purus sed semper feugiat. Ut purus magna, ultrices interdum elementum non, pretium at orci. Vivamus aliquet molestie risus, ut feugiat ante laoreet eu. Maecenas at nunc at urna pretium accumsan. Morbi aliquet feugiat ipsum, eu hendrerit lacus commodo eget. Praesent fermentum vestibulum ante, in auctor mi semper nec. Ut lectus libero, porttitor ac lectus non, vestibulum tincidunt ante. Nam tempor scelerisque quam. Fusce consequat ultrices ante, ut dignissim lacus sagittis auctor. Nunc et rhoncus mauris.",
        technologiesUsed: [
            <Icon h={iconSize} w={iconSize} color="violet" as={SiCsharp} />,
            <Icon h={iconSize} w={iconSize} color="blue.300" as={SiCss3} />,
            <Icon h={iconSize} w={iconSize} color="orange.500" as={SiHtml5} />,
            <Icon h={iconSize} w={iconSize} color="yellow" as={SiJavascript} />
        ]
    }

    let gtaCursor = {
        title: "GTACursor",
        repoLink: "https://github.com/MaxBranvall/GTAStyleCursor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium purus sed semper feugiat. Ut purus magna, ultrices interdum elementum non, pretium at orci. Vivamus aliquet molestie risus, ut feugiat ante laoreet eu. Maecenas at nunc at urna pretium accumsan. Morbi aliquet feugiat ipsum, eu hendrerit lacus commodo eget. Praesent fermentum vestibulum ante, in auctor mi semper nec. Ut lectus libero, porttitor ac lectus non, vestibulum tincidunt ante. Nam tempor scelerisque quam. Fusce consequat ultrices ante, ut dignissim lacus sagittis auctor. Nunc et rhoncus mauris.",
        technologiesUsed: [
            <Icon h={iconSize} w={iconSize} color="violet" as={SiCsharp} />
        ]
    }

    projects.push(winMixerDeck);
    projects.push(gtaCursor);

    projects.forEach(el => {
        projectJSXdesktop.push(
            <Box p="1%" position="relative" maxWidth="20%">
                <Box position="absolute" height="100%" bgColor="blue.400" borderRadius="15" opacity="0.7" top="0" left="0" w="100%"/>
                <Box position="relative" zIndex="2" color="white" h="100%">
                    <Heading>{el.title}</Heading>
                    <Link href={el.repoLink} textDecoration="underline" fontSize={responsiveText}>Link to repo</Link>
                    <Text>
                        {el.description}
                    </Text>
                    <Heading>Technologies Used</Heading>
                    <HStack justifyContent="center" mt="3%">
                        {el.technologiesUsed}
                    </HStack>
                </Box>
            </Box>
        )
        projectJSXmobile.push(
            <Popover>
            <PopoverTrigger>
                <Button>{el.title}</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader><Link href={el.repoLink} textDecoration="underline" fontSize={responsiveText}>Link to repo</Link></PopoverHeader>
                <PopoverBody>{el.description}
                    <Heading>Technologies Used</Heading>
                    <HStack justifyContent="center" mt="3%">
                        {el.technologiesUsed}
                    </HStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
        )
    })

    let i = 0;

    return (

        <Box id="showcasePage" h="100vh" bg="green.400" background="linear-gradient(to left bottom, #2f3441 50%, #212531 50%)" textAlign="center">

            <Heading variant="mainHeader">Projects</Heading>

            <Flex justifyContent="center" gridGap="10%" display={responsiveDisplay}>
                {projectJSXdesktop}
            </Flex>

            {/* <Text color="white">GTA-Cursor, Momscookbook, WinMixerDeck, try and finish autodirectory, maybe build maintnence minder site</Text> */}

            <Flex justifyContent="space-around" display={responsiveDisplay2}>
                {projectJSXmobile}
                {/* <Popover>
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
                </Popover> */}
            </Flex>

        </Box>

    )

}

export default ProjectsPage;
