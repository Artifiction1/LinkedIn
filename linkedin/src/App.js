import logo from './logo.svg';
import './App.css';
import Experiences from './components/Experiences';
import ExpInput from './components/ExpInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpInput/>
        <Experiences/>
      </header>
    </div>
  );
}

export default App;
