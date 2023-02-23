import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { ProgressBar } from './components/navbar/indexProgress';
import StartingPage from './components/pruebas/StartingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestTemperamento from './components/pruebas/TestTemperamento';
import Home from './components/pruebas/home';
import Quiz from './components/Temperamento/quizTEMP';
import { QuizProvider } from "./contexts/quizTemperamento";
import TestTIE from './components/pruebas/TIE';
import TestCAM from './components/pruebas/CAM';
import TestGRIT from './components/pruebas/GRIT';
import { MyProvider } from './contexts/contextEmail';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className='navbar'>
        <Navbar />
    </div>
    
    <ProgressBar />

    </div>
    <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/Temperamento' element={< TestTemperamento />}></Route>
      <Route exact path='/TIE' element={< TestTIE />}></Route>
      <Route exact path='/CAM' element={< TestCAM />}></Route>
      <Route exact path='/GRIT' element={< TestGRIT />}></Route>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
