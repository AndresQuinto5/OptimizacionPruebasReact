import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import StartingPage from './components/pruebas/StartingPage';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='starting-page'>
        <StartingPage />
        </div>

    </div>
  );
}


export default App;
