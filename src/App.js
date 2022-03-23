import './App.css';
import Dashboard from './views/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activity" element={<Dashboard />} />
          <Route path="/wallet" element={<Dashboard />} />
          <Route path="/products" element={<Dashboard />} />
          <Route path="/referrals" element={<Dashboard />} />
          <Route path="/help-center" element={<Dashboard />} />
          <Route path="/deposit" element={<Dashboard />} />
          <Route path="/transfer" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
