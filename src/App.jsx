import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./pages/Herosection";
import HeroProfit from "./pages/HeroProfit";
import Heroslider from "./pages/Heroslider";
import Card from "./pages/Card";
import Review from "./pages/Review";
import Profitcal from './pages/Profitcal'
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <HeroProfit />
      <Heroslider />
      <Card />
      <Review />
      <Profitcal/>
      <Footer/>
    </>
  );
}

export default App;
