
import { Box, Heading, Text, Button, PopoverHeader, Flex, Link, HStack, Icon, Spacer } from "@chakra-ui/react";
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";
import { SiCsharp, SiCss3, SiHtml5, SiJavascript } from "react-icons/si"

function ProjectsPage() {

    const responsiveText = {md: "md", lg: "lg", xl: "xl"}
    const responsiveHeading = {base: "lg", md: "2xl", xl: "2xl"}
    const respDescriptionText = {base: "sm", md: "md", xl: "md"}
    const responsiveDisplay = {base: "none", md:"none", lg: "flex", xl: "flex"}
    const responsiveDisplay2 = {base: "flex", md: "flex", lg: "none"}
    const iconSize = {base: "40px", md: "30px", lg: "30px", xl: "35px"};

    var projects = []
    var projectJSXdesktop = []
    var projectJSXmobile = []

    let winMixerDeck = {
        title: "WinMixerDeck",
        repoLink: "https://github.com/MaxBranvall/WinMixerDeck",
        description: "Stream Deck plugin which allows users to control the volume of individual applications from their Stream Deck. The front-end is written in Javascript, HTML, and CSS while the backend" +
        " is written in C# using .NET 5. The backend utilizes my C# Stream Deck API wrapper.",
        technologiesUsed: [
            <Icon title="CSharp" h={iconSize} w={iconSize} color="violet" as={SiCsharp} />,
            <Icon title="CSS3" h={iconSize} w={iconSize} color="blue.300" as={SiCss3} />,
            <Icon title="HTML5" h={iconSize} w={iconSize} color="orange.500" as={SiHtml5} />,
            <Icon title="Javascript" h={iconSize} w={iconSize} color="yellow" as={SiJavascript} />
        ]
    }

    let gtaCursor = {
        title: "GTACursor",
        repoLink: "https://github.com/MaxBranvall/GTAStyleCursor",
        description: "Windows desktop application which allows users to change their desired system cursors to the iconic middle finger cursor present on the computers in the Grand Theft Auto video games." +
        " The front-end was built with WPF and is designed to resemble the eyefind.info website from the video games. The back-end utilizes my Windows cursor changing library.",
        technologiesUsed: [
            <Icon title="CSharp" h={iconSize} w={iconSize} color="violet" as={SiCsharp} />
        ]
    }

    let momsCookbook = {
        title: "MomsCookbook",
        repoLink: "https://github.com/MaxBranvall/MomsCookbook",
        description: "Windows desktop application which allows users to change their desired system cursors to the iconic middle finger cursor present on the computers in the Grand Theft Auto video games." +
        " The front-end was built with WPF and is designed to resemble the eyefind.info website from the video games. The back-end utilizes my Windows cursor changing library.",
        technologiesUsed: [
            <Icon title="CSharp" h={iconSize} w={iconSize} color="violet" as={SiCsharp} />
        ]
    }

    let autoDirectory = {
        title: "AutoDirectory",
        repoLink: "https://github.com/MaxBranvall/AutoDirectory",
        description: "Windows desktop application which allows users to change their desired system cursors to the iconic middle finger cursor present on the computers in the Grand Theft Auto video games." +
        " The front-end was built with WPF and is designed to resemble the eyefind.info website from the video games. The back-end utilizes my Windows cursor changing library.",
        technologiesUsed: [
            <Icon title="CSharp" h={iconSize} w={iconSize} color="violet" as={SiCsharp} />
        ]
    }

    projects.push(winMixerDeck);
    projects.push(gtaCursor);
    // projects.push(momsCookbook);
    // projects.push(autoDirectory);

    // add each project to desktop and mobile layout containers
    projects.forEach(el => {
        projectJSXdesktop.push(
            <Box p="1%" position="relative" maxWidth={{md: "35%", lg: "25%"}} h="inherit">
                <Box position="absolute" height="100%" bgColor="blue.400" borderRadius="15" opacity="0.5" top="0" left="0" w="100%"/>
                <Flex position="relative" zIndex="2" color="white" h="100%" direction="column">
                    <Heading fontSize={responsiveHeading}>{el.title}</Heading>
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
                <Button minWidth="50%">{el.title}</Button>
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

            <Flex justifyContent="center" gridGap="1em" wrap={{base: null, md: "nowrap", xl: "wrap"}} display={responsiveDisplay}>
                {projectJSXdesktop}
            </Flex>

            {/* <Text color="white">GTA-Cursor, Momscookbook, WinMixerDeck, try and finish autodirectory, maybe build maintnence minder site</Text> */}

            <Flex justifyContent="center" gridColumnGap="3em" gridRowGap="3em" wrap="wrap" display={responsiveDisplay2}>
                {projectJSXmobile}
            </Flex>

        </Box>

    )

}

export default ProjectsPage;
