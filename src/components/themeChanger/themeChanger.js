import { Button, useColorMode } from "@chakra-ui/react";

function ThemeChanger() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (

        <div>
            <Button onClick={toggleColorMode} colorScheme="blue">
                Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        </div>

    )
}

export default ThemeChanger;