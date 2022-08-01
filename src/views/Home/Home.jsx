import { Heading, Text, Box, Image, Flex } from "@chakra-ui/react";
import Section from "../../layout/Section";
import Card from "../../components/Card";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";

export default function Home() {
  return (
    <Box as="article" display="contents">
      {/* <Heading as="h1" size="2xl">
        App Lista de tareas
      </Heading> */}
      <Section>
        <Card>
          <Heading fontSize="xl">Well at home!</Heading>
          <Flex gap="5" textShadow="none" color="#000" flexWrap='wrap' justifyContent='center'>
            <Box bg="#f5f5f5" boxShadow="0 0 10px 2px #000">
              <Image src={img1} h="150px" />
              <Text>Window</Text>
            </Box>
            <Box bg="#f5f5f5" boxShadow="0 0 10px 2px #000">
            <Image src={img2} h="150px"/>
              <Text>Sliding Gate</Text>
            </Box>
            <Box bg="#f5f5f5" boxShadow="0 0 10px 2px #000">
            <Image src={img3} h="150px"/>
              <Text>Pergola</Text>
            </Box>
          </Flex>
        </Card>
      </Section>
    </Box>
  );
}
