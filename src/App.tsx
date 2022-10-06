import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/Register";
import Header from "./components/common/Header";
import Layout from "./components/Layout/Layout";
import LoginComponent from "./components/Login";
import MainPage from "./pages/main/MainPage";

import { useSelector } from "react-redux";

const App = () => {
  const { login } = useSelector((state: any) => state.userReducer);
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          {login ? (
            <>
              <Route index element={<MainPage />} />
              <Route path="*" element={<div>Not Found</div>} />
            </>
          ) : (
            <>
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="*" element={<LoginComponent />} />
            </>
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
