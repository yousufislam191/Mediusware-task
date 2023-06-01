import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import ModalA from "../components/ModalA";
import ModalB from "../components/ModalB";

const RouterPath = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/modalA" element={<ModalA />} />
          <Route exact path="/modalB" element={<ModalB />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterPath;
