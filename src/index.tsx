import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, HashRouter } from "react-router-dom";
import App from "./pages/App";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Prices from "./pages/Prices";
import Terms from "./pages/Terms";
import Faq from "./pages/Faq";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="prices" element={<Prices />} />
        <Route path="terms" element={<Terms />} />
        <Route path="faq" element={<Faq />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
