import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';

const options = [
  { name: 'DermalFillers' },
  { name: 'Hypnotherapy' },
  { name: 'Secret RF' },
  { name: 'Profhilo' },
  { name: 'Facials' },
  { name: 'Sclerotherapy' },
  { name: 'LED' },
  { name: 'Fat Disolve' }
];

function Step1() {
  return (
    <div>
      <header>
        Header - Current Step : 1/2
      </header>
      <div className="options-container">
        {options.map((option, index) => (
          <Link key={index} to={`/option/${index}`} className="option-card">
            <h3 className="option-title">{option.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Step2() {
  const { index } = useParams();
  const navigate = useNavigate();
  const option = options[index];

  return (
    <div>
      <header>
        Header - Current Step : 2/2
      </header>
      <h3>Selected Option: {option.name}</h3>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="/option/:index" element={<Step2 />} />
          </Routes>
        </main>

        <footer>Powered by <b>Pabau</b></footer>
      </div>
    </Router>
  );
}

export default App;