import React from 'react'

    class Registro extends React.Component{
    constructor(){
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange = e=>{
        let input = this.state.input;
        input[e.target.name] = e.target.value;
      
        this.setState({
          input
        });
      }

      handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["password"]= "";
            this.setState({input:input});
      
            alert('Demo Form is submited');
        }
      }

      validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["name"]) {
          isValid = false;
          errors["name"] = "Please enter your name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
          }
      
          if (typeof input["email"] !== "undefined") {
              
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }
        if(!input["password"]){
            isValid = false;
            errors["password"] = "Please enter your password.";
        }
       



        this.setState({
            errors: errors
          });
      
          return isValid;

    }


    

    render(){
    return(

        <div className="container" style={{marginLeft: 80}}>
        <form onSubmit={this.handleSubmit}>

        <div className="form-group" style={{marginLeft: -60, width:370}}>
            <input 
            className="form-control"
            type="text"
            placeholder="name"
            name="name"
            value={this.state.input.name}
            onChange={this.handleChange}
            id="name"></input>

            <div className="text-danger">{this.state.errors.name}</div>

        </div>

        <div className="form-group" style={{marginLeft: -60,width:370}}>
            <input 
            className="form-control"
            type="email"
            placeholder="email"
            name="email"
            value={this.state.input.email}
            onChange={this.handleChange}
            id="email"

            ></input>

           <div className="text-danger">{this.state.errors.email}</div>

        </div>

        <div className="form-group" style={{marginLeft: -60,width:370}}>
            <input 
            className="form-control"
            type="password"
            placeholder="password"
            name="password"
            value={this.state.input.password}
            onChange={this.handleChange}
            id="password"
           

            ></input>
            <div className="text-danger">{this.state.errors.password}</div>

        </div>
    
        <a href="/app">
             <button style={{marginLeft: -60}}>submit</button>
         </a>
         </form>

         <a href="/app">
             <button style={{marginLeft: -60}}>Regresar</button>
         </a>
        
    </div>
    )
    }
}


export default Registro

