import { extendTheme } from "@chakra-ui/react";
import Heading from "./heading";

const theme = {

    initialColorMode: "dark",
    useSystemColorMode: false,
    fonts: {
        heading: "Open Sans"
    },
    components: {
        Heading
    }

};

export default extendTheme(theme);

