import logo from './logo.svg';
import './App.css';
import GetPosts from './components/GetPosts';
import NewPost from './components/NewPost';

function App() {
  return (
    <div className="App">
      <GetPosts />
      <NewPost />
    </div>
  );
}

export default App;
