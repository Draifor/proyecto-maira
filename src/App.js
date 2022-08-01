import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Grid, GridItem, Container, Center, useBreakpointValue} from "@chakra-ui/react";

import HeaderComponent from "./layout/HeaderComponent";
import NavComponent from "./layout/NavComponent";
import FooterComponent from "./layout/FooterComponent";

const Home = lazy(() => import("./views/Home/Home.jsx"));
// const Tasks = lazy(() => import("./views/Tasks.jsx"));
// const AboutUs = lazy(() => import("./views/AboutUs.jsx"));

function App() {
  const headerHeight = useBreakpointValue({ sm: "220px", md: "180px", lg: "150px", xl: "110px"});
  const navHeight = useBreakpointValue({ sm: "50px", lg: "110px", xl: "60px"});
  return (
    <Router>
      <Grid
        templateRows={`${headerHeight} ${navHeight} 1fr 80px`}
        bg="#f5f5f5"
        minH="100vh"
        textAlign="center"
      >
        <GridItem w="100%" bg="#1f1f23">
          <Center h="100%">
            <HeaderComponent />
          </Center>
        </GridItem>

        <GridItem w="100%" bg="#ccc">
          <Center h="100%">
            <NavComponent />
          </Center>
        </GridItem>

        <GridItem w="100%">
          <Container
            justifyContent="space-between"
            fontSize="1.5em"
            color="#fafafa"
            maxW="95vw"
            gap={4}
            centerContent
          >
            <Center
              as="main"
              flexGrow="1"
              flexDirection="column"
              justifyContent="flex-start"
              gap="5"
            >
              <Suspense fallback={<h2>Cargando...</h2>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* <Route path="/home" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/about-us" element={<AboutUs />} /> */}
                </Routes>
              </Suspense>
            </Center>
          </Container>
        </GridItem>

        <GridItem w="100%" bg="#1f1f23">
          <Center h='100%'>
            <FooterComponent />
          </Center>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
