import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route index element={<div>Main</div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
