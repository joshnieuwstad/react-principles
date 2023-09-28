import { useNavigate, Routes, Route } from "react-router-dom";
import "./App.css";
import { Box, Button, ButtonGroup, Divider } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { NavigationEnum } from "./enums/navigationEnum";
import CustomHooks from "./components/CustomHooks/CustomHooks";

function App() {
  const navigate = useNavigate();

  const navigationEnum = NavigationEnum;

  const handleNavigate =
    (navigateTo: NavigationEnum) => (e: React.MouseEvent) => {
      if (navigateTo === NavigationEnum.CustomHooks) {
        return navigate("custom-hooks");
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
        </ButtonGroup>
        <Box py="10">
          <Divider />
        </Box>
        <Routes>
          <Route path="custom-hooks" element={<CustomHooks />}></Route>
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
