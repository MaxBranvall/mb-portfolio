
import { Box, Heading, Text, Button, PopoverHeader, Flex, Link, HStack, Icon, Spacer } from "@chakra-ui/react";
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";
import { SiCsharp, SiCss3, SiHtml5, SiJavascript } from "react-icons/si"

function ProjectsPage() {

    const responsiveText = {base: "xl", md: "2xl", xl: "4xl"}
    const responsiveHeading = {base: "xl", md: "2xl", xl: "4xl"}
    const respDescriptionText = {base: "sm", md: "md", xl: "lg"}
    const responsiveDisplay = {base: "none", md:"flex", xl: "flex"}
    const responsiveDisplay2 = {base: "flex", md: "none", xl: "none"}
    const iconSize = "40px";

    var projects = []
    var projectJSXdesktop = []
    var projectJSXmobile = []

    let winMixerDeck = {
        title: "WinMixerDeck",
        repoLink: "https://github.com/MaxBranvall/WinMixerDeck",
        description: "Stream Deck plugin which allows users to control the volume of individual applications from their Stream Deck. The front-end is written in Javascript, HTML, and CSS while the backend" +
        " is written in C# using .NET 5. The backend utilizes my C# Stream Deck API wrapper.",
        technologiesUsed: [
            <Link  ><Icon h={iconSize} w={iconSize} color="violet" as={SiCsharp} /> </Link>,
            <Icon h={iconSize} w={iconSize} color="blue.300" as={SiCss3} />,
            <Icon h={iconSize} w={iconSize} color="orange.500" as={SiHtml5} />,
            <Icon h={iconSize} w={iconSize} color="yellow" as={SiJavascript} />
        ]
    }

    let gtaCursor = {
        title: "GTACursor",
        repoLink: "https://github.com/MaxBranvall/GTAStyleCursor",
        description: "Windows desktop application which allows users to change their desired system cursors to the iconic middle finger cursor present on the computers in the Grand Theft Auto video games." +
        " The front-end was built with WPF and is designed to resemble the eyefind.info website from the video games. The back-end utilizes my Windows cursor changing library.",
        technologiesUsed: [
            <Icon h={iconSize} w={iconSize} color="violet" as={SiCsharp} />
        ]
    }

    projects.push(winMixerDeck);
    projects.push(gtaCursor);

    projects.forEach(el => {
        projectJSXdesktop.push(
            <Box p="1%" position="relative" maxWidth="20%" h="inherit">
                <Box position="absolute" height="100%" bgColor="blue.400" borderRadius="15" opacity="0.5" top="0" left="0" w="100%"/>
                <Flex position="relative" zIndex="2" color="white" h="100%" direction="column">
                    <Heading>{el.title}</Heading>
                    <Link href={el.repoLink} textDecoration="underline" fontSize={responsiveText}>Link to repo</Link>
                    <Text fontSize={respDescriptionText}>
                        {el.description}
                    </Text>                    
                    <Spacer />
                    <Heading fontSize={responsiveHeading}>Technologies Used</Heading>
                    <HStack justifyContent="center" mt="3%">
                        {el.technologiesUsed}
                    </HStack>
                </Flex>
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
