import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import StartingPage from './components/pruebas/StartingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Final from './components/pruebas/final';
import Home from './components/pruebas/home';
import Quiz from './components/Temperamento/quizTEMP';
import { QuizProvider } from "./contexts/quiz";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className='navbar'>
        <Navbar />
    </div>
    <QuizProvider>
      <Quiz />
    </QuizProvider>


    </div>
    <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/Temperamento' element={< Final />}></Route>
      <Route exact path='/contact' element={< StartingPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
