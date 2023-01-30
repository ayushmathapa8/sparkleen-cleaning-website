import React from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";
import { Services } from "./components/Services";
import { Faq } from "./components/Faq";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="faq" element={<Faq />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
