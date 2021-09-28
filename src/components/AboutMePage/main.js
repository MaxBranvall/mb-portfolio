
import { Box, Heading, Text, Flex, Grid, GridItem } from "@chakra-ui/react";

function AboutMePage() {

    return (

        <Box h="100vh" bg="blue.400" background="linear-gradient(to right bottom, #2f3441 50%, #212531 50%)" id="aboutMePage">

            <Heading p="1em" color="white" textAlign="center">About Me</Heading>

            <Text grid w="80%" m="0 auto" fontSize={{ base: "18px", md: "24px", lg: "28px", xl: "40px"}} color="white" textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar quis urna eu auctor. Fusce ut nulla interdum, luctus erat vitae, hendrerit erat.
                Aenean non sodales enim, nec porta magna. Etiam efficitur justo purus, ac cursus velit aliquet non.
                Proin id leo tortor. Morbi congue tincidunt est, venenatis lobortis erat euismod at. Proin efficitur lacinia diam at sodales. Suspendisse aliquet sodales auctor.
                Pellentesque vehicula auctor libero, non dignissim justo gravida eget. Vestibulum laoreet vulputate dictum. Nam eget risus mauris.
                In ut neque metus. Nunc vitae purus varius, mattis eros nec, facilisis dolor. Etiam ut metus viverra, lacinia lectus et, ultricies lectus. Fusce at metus urna.
                In hac habitasse platea dictumst. Sed a erat consequat, congue augue eget, congue ex. Sed nec nunc libero.
            </Text>

        </Box>

    )

}

export default AboutMePage;
