import './App.css'
import "./components/index"
import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, NavBar, Stats, Testimonials } from './components'

function App() {
  return (
    <div className="bg-gray-700 w-full overflow-hidden">
        <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="w-full xl:max-w-[1680px]">
              <NavBar />
            </div>
        </div>
        <div className=" bg-black flex justify-center items-start">
          <div className="w-full xl:max-w-[1500px]">
            <Hero />
          </div>
        </div>
        <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="w-full xl:max-w-[1280px]">
              <Stats /> 
              <Business />
              <Billing />
              <CardDeal />
              <Testimonials />
              <Clients />
              <CTA />
              <Footer />
            </div>
        </div>
    </div>
  )
}

export default App
