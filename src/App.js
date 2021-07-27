import {React} from 'react';
import Home from './Paginas/Home'
import Navbar from './Componente/Navbar'
import PaginaFormulario from './Paginas/PaginaFormulario'
import BuscadorEquipo from './Paginas/BuscadorEquipo'

import { Provider } from 'react-redux'
// Es para leer las variable store y duskc
import generateStore from './redux/store';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detalle from './Paginas/Detalle';

const App = () => {
const store = generateStore()
  return ( 
    <Router>
      <Provider store={store}>
          <Navbar/>
            <Switch>           
                   <Route path="/" exact>
                        <Home  />
                    </Route>
                    <Route path="/buscar" exact>
                        <BuscadorEquipo/>
                    </Route>
                    <Route path="/iniciarSeccion" exact>
                        <PaginaFormulario />
                    </Route>
                    <Route path="/:id" exact>
                        <Detalle/>
                    </Route>
            </Switch>
      </Provider>
    </Router>
   );
}
 
export default App;
