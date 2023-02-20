import { Footer } from "./components/Layout/Footer/Footer";
import { HomePage } from "./components/pages/HomePage";
import { NavBar } from "./components/Layout/Navigation/NavBar";
import { Services } from "./components/Services";
import { Transactions } from "./components/Transactions";
import { LoginModal } from "./components/Form";
import { useState } from "react";
import {Exchange} from "./components/pages/Exchange";
import {Wallet} from "./components/pages/Wallet";
import {Market} from "./components/pages/Market";
import { Route, Routes } from "react-router-dom";
const App = () => {
  const Home = () => {
    return (
      <div>
        <div
          className={`min-h-screen ${
            modalisOpen && `opacity-70 pointer-events-none`
          }`}
        >
          <div className="gradient-bg-welcome">
            <NavBar setModalisOpen={setModalisOpen} modalisOpen={modalisOpen} />
            <HomePage />
          </div>
          <Services />
          <Transactions />
          <Footer />
        </div>
        {modalisOpen && (
          <LoginModal
            setModalisOpen={setModalisOpen}
            modalisOpen={modalisOpen}
          />
        )}
      </div>
    );
  };
  const [modalisOpen, setModalisOpen] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/market" element={<Market/>} />
      <Route path="/exchange" element={<Exchange/>} />
      <Route path="/wallet" element={<Wallet/>} />
    </Routes>
  );
};

export default App;
