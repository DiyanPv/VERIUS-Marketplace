import { Footer } from "./components/Layout/Footer/Footer";
import { HomePage } from "./components/pages/HomePage";
import { NavBar } from "./components/Layout/Navigation/NavBar";
import { Services } from "./components/Services";
import { Transactions } from "./components/Transactions";
import { LoginModal } from "./components/Form";
import { useState } from "react";
const App = () => {
  const [modalisOpen, setModalisOpen] = useState(false);
  return (
    <div>
      <div className={`min-h-screen ${modalisOpen && `opacity-70 pointer-events-none`}`}>
        <div className="gradient-bg-welcome">
          <NavBar setModalisOpen={setModalisOpen} modalisOpen={modalisOpen} />
          <HomePage />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
      {modalisOpen && <LoginModal setModalisOpen={setModalisOpen} modalisOpen={modalisOpen} />}
    </div>
  );
};

export default App;
