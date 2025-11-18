
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CompanyProvider } from './context/CompanyContext'
import CompanyList from './components/CompanyList'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  
  return (
    <>
      <Router>
      <CompanyProvider>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/companies" element={<CompanyList />} />
        </Routes>
      </CompanyProvider>
    </Router>
    </>
  )
}

export default App
