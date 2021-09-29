
import { Box, Heading, Icon, Flex, Text, Image } from "@chakra-ui/react";
import { IoSchool } from 'react-icons/io5';

function EducationPage() {

    return (

        <Box id="educationPage" h="100vh" textAlign="center" background="linear-gradient(to left bottom, #2f3441 50%, #212531 50%)">

            <Heading variant="mainHeader">Education</Heading>

            <Flex alignContent="center" alignItems="center" mt="5%" flexFlow="column">

               <Box p="3%" position="relative">
                   <Box position="absolute" height="100%" bgColor="blue.400" borderRadius="15" opacity="0.7" top="0" left="0" w="100%" zIndex="1"/>

                   <Box position="relative" zIndex="2">
                       <Icon as={IoSchool} w={20} h={20} color="black" zIndex="inherit"/>
                       <Text fontSize="4xl" color="white" zIndex="inherit">Southern New Hampshire University</Text>
                       <Text fontSize="4xl" color="white" zIndex="inherit">BS Computer Science</Text>
                       <Text fontSize="3xl" color="white" zIndex="inherit">June 2019 - Current</Text>
                       {/* <Image src="./snhu.jpg" /> */}
                    </Box>

               </Box>

            </Flex>

        </Box>

    )

}

export default EducationPage;
