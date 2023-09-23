
import { Box, Heading, Icon, Flex, Text, Image } from "@chakra-ui/react";
import { IoSchool } from 'react-icons/io5';
import "./main.css"

function EducationPage() {

    const responsiveText = {base: "xl", md: "2xl", xl: "4xl"}
    const responsiveTextYears = {base: "md", md: "xl", xl: "2xl"}
    const responsiveImage = {base: "120px", md: "150px", xl: "250px"}

    return (

        <Box id="educationPage" h="100vh" textAlign="center" background="linear-gradient(to right bottom, #2f3441 50%, #212531 50%)">

            <Flex justifyContent="center" flexDir="column" h="inherit">
                <Heading variant="mainHeader" p="0.5em">Education</Heading>

                <Flex h="100%" justifyContent="space-evenly" alignItems="center" flexFlow={{base: "column", lg: "column", xl: "row"}} m="0 5%">

                    <Box p="3%" position="relative">
                        <Box position="absolute" height="100%" bgColor="blue.400" borderRadius="15" opacity="0.7" top="0" left="0" w="100%"/>

                        <Box position="relative" zIndex="2">
                            <Icon as={IoSchool} w={20} h={20} color="black" zIndex="inherit"/>
                            <Text fontSize={responsiveText} color="white" zIndex="inherit">Southern New Hampshire University</Text>
                            <Text fontSize={responsiveText} color="white" zIndex="inherit">B.S. Computer Science</Text>
                            <Text fontSize={responsiveTextYears} color="white" zIndex="inherit">June 2020 - April 2023</Text>
                            <Image boxSize={responsiveImage} margin="auto" src="./assets/snhu.png" />
                            </Box>

                    </Box>

                    <Box p="3%" position="relative">
                        <Box position="absolute" height="100%" bgColor="blue.400" borderRadius="15" opacity="0.7" top="0" left="0" w="100%"/>

                        <Box position="relative" zIndex="2">
                            <Text fontSize={responsiveText} color="white" zIndex="inherit">Amazon Web Services</Text>
                            <Text fontSize={responsiveText} color="white" zIndex="inherit">Certified Cloud Practitioner</Text>
                            <Text fontSize={responsiveTextYears} color="white" mb="3%" zIndex="inherit">July 2022 - Current</Text>
                            <Image boxSize={responsiveImage} margin="0 auto" src="./assets/aws.png" />
                        </Box>

                    </Box>

                </Flex>
            </Flex>

        </Box>

    )

}

export default EducationPage;
