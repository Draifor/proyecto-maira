import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box, Container, Center, useColorModeValue } from "@chakra-ui/react";

import HeaderComponent from "./layout/HeaderComponent";
import NavComponent from "./layout/NavComponent";
import FooterComponent from "./layout/FooterComponent";

const Home = lazy(() => import("./views/Home/Home.jsx"));
const Tasks = lazy(() => import("./views/Tasks.jsx"));
const AboutUs = lazy(() => import("./views/AboutUs.jsx"));

function App() {
  return (
    <Router>
      <Box bg="#f5f5f5" minH="100vh">
        <Container
          justifyContent="space-between"
          textAlign="center"
          fontSize="1.5em"
          color="#fafafa"
          minH="100vh"
          maxW="95vw"
          gap={4}
          centerContent
        >
          <HeaderComponent />
          <NavComponent />

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
          <FooterComponent />
        </Container>
      </Box>
    </Router>
  );
}

export default App;
