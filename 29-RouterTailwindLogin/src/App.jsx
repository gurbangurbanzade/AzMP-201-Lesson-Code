import { useState, useReducer, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Home from "./pages/Home";
import reducer from "./reducers/reducer";
import Layout from "./layout";
import Basket from "./pages/Basket";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import "./index.css";
import { getAllData } from "./services";
import { endPoints } from "./services/api";
import Register from "./pages/Register";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    filteredProd: [],
    basket: [],
  });
  let isLogin = false;
  useEffect(() => {
    isLogin = JSON.parse(localStorage.getItem("loginUser")) || false;

    getAllData(endPoints.products).then((data) => {
      console.log(data);
      dispatch({
        type: "SetProducts",
        products: data,
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogin ? <Layout /> : <Login />}>
          <Route index element={<Home state={state} dispatch={dispatch} />} />
          <Route
            path="basket"
            element={<Basket state={state} dispatch={dispatch} />}
          />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        {/* <Route path="login" element={isLogin ? <NoPage /> : <Login />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>

    // <ChakraProvider>
    //   <Header />
    //   <Home state={state} dispatch={dispatch} />

    //   <Footer />
    // </ChakraProvider>
  );
}

export default App;
