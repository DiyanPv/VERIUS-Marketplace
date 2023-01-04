import { Footer } from './components/Footer'
import { HomePage } from './components/HomePage'
import { NavBar } from './components/NavBar'
import { Services } from './components/Services'
import { Transactions } from './components/Transactions'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <HomePage />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
