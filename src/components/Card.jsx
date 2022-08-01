import { Center } from "@chakra-ui/react";

export default function Card({ children }) {
  return (
    <Center
      p="5"
      m="5"
      borderRadius="1"
      border="1px solid #000"
      flexDirection="column"
      gap="5"
      bg='white'
    >
      {children}
    </Center>
  );
}
