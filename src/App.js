import "./App.css";
import LoginForm from "./forms/LoginForm";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <LoginForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
