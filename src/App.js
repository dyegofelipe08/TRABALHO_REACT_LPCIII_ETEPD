
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Consulta from './pages/Consulta';
import Cadastro from './pages/Cadastro';


function App() {
  return (
    <div >
<BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contato' element={<Contato/>}/>
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path='/Consulta' element={<Consulta/>}/>
      </Routes>

</BrowserRouter>
      
    </div>
  );
}

export default App;
