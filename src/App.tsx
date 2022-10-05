import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div>Main</div>} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
