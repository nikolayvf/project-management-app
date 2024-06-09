import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
