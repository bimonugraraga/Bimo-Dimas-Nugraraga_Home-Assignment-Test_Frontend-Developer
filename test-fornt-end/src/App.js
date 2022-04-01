import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import HomeScreen from './views/Home';
import DetailScreen from './views/Detail';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
        {/* <NavBar /> */}
        <NavBar />
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/:id' element={<DetailScreen/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
