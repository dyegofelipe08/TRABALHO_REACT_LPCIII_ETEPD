
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Consulta from './pages/Consulta';
import Cadastro from './pages/Cadastro';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contato' component={Contato} />
          <Route path='/cadastro-produtos:codigo' exact={true} component={Cadastro} />
          <Route path='/cadastro-produtos' exact={true} component={Cadastro} />
          <Route path='/consulta' component={Consulta} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
