/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowData from "./components/ShowData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditData from "./components/EditData";
import SearchBar from "./components/SearchBar";
import ModalProfile from "./components/ModalProfile";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<EditData />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/modal" element={<ModalProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
