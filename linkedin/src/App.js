
import './App.css';
import GetPosts from './components/GetPosts';
import NewPost from './components/NewPost';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <GetPosts />
      <NewPost />
      <Routes>
      <Route path="/details/:postId" element={<Details />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
