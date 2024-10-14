import React from "react";
import "./App.css";
import Header from "./shared/components/Header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./shared/components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
