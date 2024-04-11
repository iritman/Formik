import "./App.css";
import CourseEnrollmentForm from "./forms/CourseEnrollmentForm";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <CourseEnrollmentForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
