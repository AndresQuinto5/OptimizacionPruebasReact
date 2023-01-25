import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import StartingPage from './components/pruebas/StartingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Final from './components/pruebas/final';
import Home from './components/pruebas/home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='navbar'>
        <Navbar />

      </div>
      <div className='starting-page'>
        

        </div>

    </div>
    <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/Final' element={< Final />}></Route>
      <Route exact path='/contact' element={< StartingPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
