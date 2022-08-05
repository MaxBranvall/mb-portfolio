
import { Box, Heading, Text, Flex, Grid, GridItem } from "@chakra-ui/react";

function AboutMePage() {

    return (

        <Box h="100vh" bg="blue.400" background="linear-gradient(to right bottom, #2f3441 50%, #212531 50%)" id="aboutMePage">

            <Heading p="1em" color="white" textAlign="center">About Me</Heading>

            <Text grid w="80%" m="0 auto" letterSpacing="0.5px" fontSize={{ base: "20px", md: "28px", lg: "32px"}} color="white" textAlign="center">
                Hi, I'm Max Branvall. I am a detail oriented software developer with a never ending passion for learning and improving.
                I enjoy working on all types of software including desktop, web, command-line tools, and anything in between! My language
                of choice is C# (with experience in many others), but my strong fundamental knowledge of programming in general allows me to pick up any language with ease.
                When not programming, I spend my time gaming, working on my car, or golfing.
            </Text>

        </Box>

    )

}

export default AboutMePage;
