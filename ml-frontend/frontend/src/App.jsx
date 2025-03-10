

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import GrokBackground from "./GrokBackground";
import Home from "./pages/Home";
import ImageUploadForm from "./components/ImageUploadForm";
import Instructions from "./components/Instructions";

function App() {
  return (
    <Router>
      <div>
      <GrokBackground />
      <Navbar />
      <Routes>
        {/* Wrap all routes inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="instructions" element={<Instructions />} />
          <Route path="check" element={<ImageUploadForm />} />
         
        </Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;



