import React from 'react'
import ReactDom from 'react-dom'

class Primero extends React.Component{
    render(){
        return(
            <div style={{width: 200, height: 100, border: 'solid', margin: 35}}>
                <p> mi primer componente </p> 

                <p> </p>

               <p> {this.props.accion}</p>

             </div>
        )
    }
}

export default Primero