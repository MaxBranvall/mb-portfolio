
import { Box, Heading, Text, Flex, Grid, GridItem } from "@chakra-ui/react";

function AboutMePage() {

    return (

        <Box h="100vh" bg="blue.400" background="linear-gradient(to right bottom, #2f3441 50%, #212531 50%)" id="aboutMePage">

            <Heading p="1em" color="white" textAlign="center">About Me</Heading>

            <Text grid w="80%" m="0 auto" letterSpacing="0.5px" fontSize={{ base: "20px", md: "28px", lg: "32px"}} color="white" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque sodales tortor ac ipsum consequat, id cursus turpis blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Nam in ipsum sed augue mollis rhoncus at eu dui.Pellentesque laoreet nunc eget placerat tincidunt.Curabitur neque orci, suscipit et sollicitudin vitae, consectetur quis ex. Phasellus pulvinar facilisis mauris eget aliquam. Vestibulum tempor arcu mi, eu consequat est commodo at. Donec tempor congue lorem, sed suscipit sapien sodales ac. Nulla aliquam ex non tempor ornare.
            </Text>

        </Box>

    )

}

export default AboutMePage;
