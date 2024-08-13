import './App.css';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DefaulLayout from './components/DefaulLayout';
import SimpleLayout from './components/SimpleLayout';


function App() {
  return (
   <>
    {/*<Header/>*/}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaulLayout><Home/></DefaulLayout>}/>
          <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>}/>
          <Route path='/Cadastro' element={<SimpleLayout><Cadastro/></SimpleLayout>} />
        </Routes>
      </BrowserRouter>
    {/*<Footer/>*/}
   </>
  );
}

export default App;
