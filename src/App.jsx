import "@mantine/core/styles.css";
import "./App.css";
import { Box, MantineProvider } from "@mantine/core";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactusPage from "./pages/ContactusPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter basename="/rk-app">
      <MantineProvider theme="dark">
        <Box>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contactus" element={<ContactusPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Box>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
