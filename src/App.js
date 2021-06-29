import Primero from './componentes/primero.js'
import Segundo from './componentes/segundo.js'
import Tercero from './componentes/tercero'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Pages/Login'
import Registro from './Pages/Registro'
import Logear from './componentes/Logear'
import Registrar from './componentes/Registrar'
import "bootstrap/dist/css/bootstrap.min.css"
//import Home from './Home'

 


function App() {
  return (
    <div >
      
      <header >
        <img  />
        <p style={{color:'blue', background:'yellow'}}>
         !LOREM 
        </p>

        <Primero
         accion="inicia ahora y seguro"

        > </Primero>

        <Segundo> </Segundo>

        <Tercero
        title = "nueva forma de empezar"
        > 
         
        </Tercero>

        <Logear>

        </Logear>

        <Registrar>

        </Registrar>

        

        

       
        
      </header>
    </div>
  );
}

export default App;
