import logo from "../assets/logo.jpeg";

import { Center, Heading, Image } from "@chakra-ui/react";
// import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function HeaderComponent() {
  return (
    <Center as="header" bg="060606" mt={5} color="#006400" pointerEvents="none">
      <Image src={logo} h="4em" alt="check-list icon" />
      <Heading>Aménagement extérieur & intérieur</Heading>
      {/* <IconButton
        onClick={toggleColorMode}
        icon={icon}
        bg={colorMode}
        color={textColor}
        position="absolute"
        top="49px"
        right="25%"
        _hover={{ bg: hover }}
        _focus={{ boxShadow: "none" }}
        pointerEvents="auto"
      /> */}
    </Center>
  );
}

export default HeaderComponent;
