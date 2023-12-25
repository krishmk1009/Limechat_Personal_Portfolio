import React from "react";
import Hero from "./components/Hero/Hero";
import Clients from "./components/Clients/Clients";
import Article from "./components/Article/Article";
import Stats from "./components/Stats/Stats";
import Features from "./components/Features/Features";
import Testim from "./components/Testimonials/Testim";
import Newsletter from "./components/Newsletter/Newsletter";
import "./App.css";

const App: React.FC = () => {
  return (
    <div >
      <Hero />
      <Clients />
      <Article />
      <Stats />
      <Features />
      <Testim />
      <Newsletter />
    </div>
  );
};

export default App;
