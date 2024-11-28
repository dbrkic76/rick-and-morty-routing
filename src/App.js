import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import SinglePage from "./Pages/SinglePage/SinglePage";
import React from "react";

const App = () => {
  return (
    <Routes>
      <Route path="/characters" element={<HomePage />} />
      <Route path="/character/:id" element={<SinglePage />}></Route>
      <Route path="*" element={<Navigate to={"/characters"} />} />
    </Routes>
  );
};

export default App;
