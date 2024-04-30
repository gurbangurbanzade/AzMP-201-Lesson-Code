import { useState, useReducer } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import { Container } from "@chakra-ui/react";
import reducer from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    filteredProd: [],
    basket: [],
  });

  return (
    <ChakraProvider>
      <Header />
      <Home state={state} dispatch={dispatch} />

      <Footer />
    </ChakraProvider>
  );
}

export default App;
