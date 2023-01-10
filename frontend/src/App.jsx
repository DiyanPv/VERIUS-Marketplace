import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { NavBar } from "./components/NavBar";
import { Services } from "./components/Services";
import { Transactions } from "./components/Transactions";
import { LoginModal } from "./components/Form";
import { useState } from "react";
const App = () => {
  const [modalisOpen, setModalisOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar setModalisOpen={setModalisOpen} modalisOpen={modalisOpen} />
        {modalisOpen && <LoginModal />}
        <HomePage />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
