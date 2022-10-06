import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/Register";
import Header from "./components/common/Header";
import Layout from "./components/Layout/Layout";
import LoginComponent from "./components/Login";
import MainPage from "./pages/main/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
