import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div>Main</div>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
