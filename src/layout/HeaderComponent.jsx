import logo from "../assets/logo.jpeg";

import { Center, Heading, Image, Button, useBreakpointValue } from "@chakra-ui/react";
import { MdCall, MdEventNote, MdShoppingCart } from "react-icons/md";

function HeaderComponent() {
  const justifyContent = useBreakpointValue({ sm: "center", xl: "space-between" });
  return (
    <Center
      as="header"
      color="#f4f4f4"
      maxW="1200px"
      w="95vw"
      justifyContent={justifyContent}
      flexWrap="wrap"
      gap={4}
      p={4}
    >
      <Center pointerEvents="none" gap={5} maxW='400px'>
        <Image src={logo} h="4em" alt="check-list icon" />
        <Heading size={"lg"}>Aménagement extérieur & intérieur</Heading>
      </Center>
      <Center gap={5}>
        <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
          Call us
        </Button>
        <Button rightIcon={<MdEventNote />} colorScheme="blue" variant="solid">
          More Information
        </Button>
      </Center>
      <Center gap={5}>
        <Button
          rightIcon={<MdShoppingCart />}
          colorScheme="blue"
          variant="outline"
        >
          Buy now
        </Button>
      </Center>
    </Center>
  );
}

export default HeaderComponent;
