import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Component/Greeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
