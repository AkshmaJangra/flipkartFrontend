import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ElectronicsContainer from "./components/ElectronicsContainer";
import MenuContainer from "./components/MenuContainer";
import BtfContainer from "./components/BtfContainer";
import SlidesContainer from "./components/SlidesContainer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart"
import BecomeASeller from "./components/BecomeASeller";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<><Navbar /><MenuContainer /> <SlidesContainer />
        <ElectronicsContainer />
        <BtfContainer /></>}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/BecomeASeller" element={<BecomeASeller />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/" ></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
