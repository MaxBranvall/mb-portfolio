
import { ExternalLinkIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Heading, Box, Flex, Link, HStack, useColorMode} from "@chakra-ui/react";
import AboutMePage from "../AboutMePage/main";
import EducationPage from "../EducationPage/main";
import HomePage from "../HomePage/main";
import ProjectsPage from "../ProjectsPage/main";
import "./main.css"


function PageSkeleton() {

    return(

        <div>
            <HomePage />
            <AboutMePage />
            <EducationPage />
            <ProjectsPage />
        </div>

    )

}

export default PageSkeleton;