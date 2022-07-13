
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar />
      <Routes>
      {/* <Route path='/' element={<Profile />}/> */}
      <Route path='/' element={<Home />}/>
      
      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
