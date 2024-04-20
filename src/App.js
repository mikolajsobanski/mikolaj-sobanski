import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </Router>
        
      
    </div>
  );
}

export default App;
