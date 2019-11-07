import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import styled from "styled-components";

function App() {

  const AppDiv = styled.div`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    background: url("https://images.unsplash.com/photo-1534841090574-cba2d662b62e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80");
    background-size: cover;
  `;

  return (
    <AppDiv >
      <Header />
      <MainContent />
      <Footer />
    </AppDiv>
  );
}

export default App;
