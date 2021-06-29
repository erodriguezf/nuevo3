import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Pages/Login'
import Registro from './Pages/Registro'
import Logear from './componentes/Logear'
import Registrar from './componentes/Registrar'
import App from './App'
import Notfaund from './Pages/NotFaund'



class Home extends React.Component{
    render(){
        return(
            <div> 

              
               
              <BrowserRouter>
                  <Switch>
                 <Route exact path="/login" component={Login}/>
                 <Route exact path="/registro" component={Registro}/>
                 <Route exact path="/app" component={App}/>
                 <Route component={App}/>
                 
                 </Switch>
                 
                 
                 


                </BrowserRouter>

               

            </div>
        )
    }
}

export default Home
