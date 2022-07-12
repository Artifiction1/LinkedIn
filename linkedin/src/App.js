
import './App.css';
import GetPosts from './components/GetPosts';
import NewPost from './components/NewPost';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/Details';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<GetPosts />} />
      <Route path="/posts" element={<NewPost />} />
      <Route path="/details/:postId" element={<Details />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
