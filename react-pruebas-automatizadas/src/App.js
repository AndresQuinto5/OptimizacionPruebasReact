import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import StartingPage from './components/pruebas/StartingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestTemperamento from './components/pruebas/TestTemperamento';
import Home from './components/pruebas/home';
import Quiz from './components/Temperamento/quizTEMP';
import { QuizProvider } from "./contexts/quiz";
import TestTIE from './components/pruebas/TIE';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className='navbar'>
        <Navbar />
    </div>

    </div>
    <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/Temperamento' element={< TestTemperamento />}></Route>
      <Route exact path='/TIE' element={< TestTIE />}></Route>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
