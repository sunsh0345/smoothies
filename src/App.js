import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from "./pages/Home"
import Create from './pages/Create';
import Update from './pages/Update';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <nav>
        <h1>Supa Smoothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
        <a href="http://daum.net"> 다음 </a>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>} />
        <Route path="/:id" element={<Update/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
