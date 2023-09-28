import { useNavigate, Routes, Route } from "react-router-dom";
import "./App.css";
import { Box, Button, ButtonGroup, Divider } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { NavigationEnum } from "./enums/navigationEnum";
import CustomHooks from "./components/CustomHooks/CustomHooks";
import HOC from "./components/HOC/HOC";

function App() {
  const navigate = useNavigate();

  const navigationEnum = NavigationEnum;

  const handleNavigate =
    (navigateTo: NavigationEnum) => (e: React.MouseEvent) => {
      if (navigateTo === NavigationEnum.CustomHooks) {
        return navigate("custom-hooks");
      } else if (navigateTo === NavigationEnum.HigherOrderSearch) {
        return navigate("hoc");
      }
      return;
    };

  return (
    <ChakraProvider>
      <div className="App">
        <ButtonGroup variant="outline" spacing="6">
          <Button
            colorScheme="blue"
            onClick={handleNavigate(navigationEnum.CustomHooks)}
          >
            Custom Array Hook
          </Button>
          <Button
            colorScheme="green"
            onClick={handleNavigate(navigationEnum.HigherOrderSearch)}
          >
            Higher Order Search Component
          </Button>
        </ButtonGroup>
        <Box py="10">
          <Divider />
        </Box>
        <Routes>
          <Route path="custom-hooks" element={<CustomHooks />}></Route>
          <Route path="hoc" element={<HOC />}></Route>
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
