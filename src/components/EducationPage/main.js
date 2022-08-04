
import { Box, Heading, Icon, Flex, Text, Image } from "@chakra-ui/react";
import { IoSchool } from 'react-icons/io5';

function EducationPage() {

    return (

        <Box id="educationPage" h="100vh" textAlign="center" background="linear-gradient(to right bottom, #2f3441 50%, #212531 50%)">

            <Heading variant="mainHeader">Education</Heading>

            <Flex justifyContent={["space-around", null, "space-around"]} h={["80%", null]} alignContent="center" alignItems="center" flexFlow={["column", null, null, null, "row"]}>

               <Box p="3%" position="relative">
                   <Box position="absolute" height="100%" bgColor="blue.400" borderRadius="15" opacity="0.7" top="0" left="0" w="100%"/>

                   <Box position="relative" zIndex="2">
                       <Icon as={IoSchool} w={20} h={20} color="black" zIndex="inherit"/>
                       <Text fontSize={["1xl", "2xl", "4xl"]} color="white" zIndex="inherit">Southern New Hampshire University</Text>
                       <Text fontSize={["1xl", "2xl", "4xl"]} color="white" zIndex="inherit">BS Computer Science</Text>
                       <Text fontSize={["l", "1xl", "3xl"]} color="white" zIndex="inherit">June 2020 - Current</Text>
                       <Image boxSize={["100px", null, "250px"]} margin="auto" src="./snhuCropped.png" />
                    </Box>

               </Box>

               <Box p="3%" position="relative">
                   <Box position="absolute" height="100%" bgColor="blue.400" borderRadius="15" opacity="0.7" top="0" left="0" w="100%"/>

                   <Box position="relative" zIndex="2">
                       <Text fontSize={["1xl", "2xl", "4xl"]} color="white" zIndex="inherit">Amazon Web Services</Text>
                       <Text fontSize={["1xl", "2xl", "4xl"]} color="white" zIndex="inherit">Certified Cloud Practitioner</Text>
                       <Text fontSize={["l", "1xl", "3xl"]} color="white" zIndex="inherit">July 2022 - Current</Text>
                       <Image boxSize={["100px", null, "250px"]} margin="auto" src="./aws.png" />
                    </Box>

               </Box>

            </Flex>

        </Box>

    )

}

export default EducationPage;
