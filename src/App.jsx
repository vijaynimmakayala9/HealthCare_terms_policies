import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import PrivacyAndPolicy from './pages/PrivacyAndPolicy';
import TermsandConditions from './pages/TermsAndConditions';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy-and-policy' element={<PrivacyAndPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsandConditions />} />
      </Routes>
    </>
  )
}

export default App
