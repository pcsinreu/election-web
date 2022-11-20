import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import CandidateList  from './components/CandidateList/CandidateList'
import Layout from './components/Layout/Layout'
import CandidateDetail from './components/CandidateDetail/CandidateDetail'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="candidateList" element={<CandidateList />} />
        <Route path="candidateDetail/:id" element={<CandidateDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
