import React from 'react'

function Login(){
    return(
        <div className="container" style={{marginLeft: 80}}>

            <div className="form-group" style={{marginLeft: -60, width:370}}>
                <input 
                className="form-control"
                type="text"
                placeholder="name"

                ></input>

            </div>

            <div className="form-group" style={{marginLeft: -60,width:370}}>
                <input 
                className="form-control"
                type="gmail"
                placeholder="gmail"

                ></input>

            </div>

            <div className="form-group" style={{marginLeft: -60,width:370}}>
                <input 
                className="form-control"
                type="password"
                placeholder="password"

                ></input>

            </div>
        

           

           
             <a href="/app">
                 <button style={{marginLeft: -60}}>Regresar</button>
             </a>
        </div>
    )
}

export default Login