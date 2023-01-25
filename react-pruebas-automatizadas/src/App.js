import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import StartingPage from './components/pruebas/StartingPage';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='navbar'>
        <Navbar />

      </div>
      <div className='starting-page'>
        
        <StartingPage />

        </div>

    </div>
    </BrowserRouter>
  );
}


export default App;
