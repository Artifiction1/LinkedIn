
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavBar';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar />
      <Routes>
      <Route path='/' element={<Profile />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
