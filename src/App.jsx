import HeroSection from './components/HeroSection/HeroSection.jsx'
import FeaturesSection from './components/FeaturesSection/FeaturesSection.jsx'
import SecuritySection from './components/SecuritySection/SecuritySection.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import UseCase from './components/UseCase/UseCase.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Integrations from './components/Integrations/Integrations.jsx'
import Finance from './components/Finance/Finance.jsx'
import AIExplanation from './components/AIExplanation/AIExplanation.jsx'
import Lead_Magnet from './components/Lead_Magnet/LeadMagnet.jsx'
import './App.css'
function App() {
 

  return (
    <>
      <div>
    <HeroSection/>
    <FeaturesSection/>
    <SecuritySection/>
    <Dashboard/>
    <UseCase/>
    <Testimonials/>
    <Integrations/>
    <Finance/>
    <AIExplanation/>  
    <Lead_Magnet/>
     </div>
    </>
  )
}

export default App
