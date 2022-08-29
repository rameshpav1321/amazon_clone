import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { auth } from "./utils/Firebase";
import { setUser } from "./redux/actions";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
function App() {
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch(setUser(authUser));
  //     } else {
  //       dispatch(setUser("hello there"));
  //     }
  //   });
  // }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route
            path="/product/:id"
            element={[<Header />, <SingleProduct />]}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
