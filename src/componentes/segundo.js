import React from 'react'
import ReactDom from 'react-dom'

//const img1= 'https://concepto.de/wp-content/uploads/2013/08/matematicas-e1551990337130.jpg',
//const img2 = 'https://www.caracteristicas.co/wp-content/uploads/2018/10/matematicas-e1581735212109.jpg'


class Segundo extends React.Component{


   constructor(props){ // se define el constructor
        super(props) //pasar las props
        const img1= 'https://concepto.de/wp-content/uploads/2013/08/matematicas-e1551990337130.jpg';
        const img2 = 'https://www.caracteristicas.co/wp-content/uploads/2018/10/matematicas-e1581735212109.jpg';
        const img3 = 'https://img.freepik.com/vector-gratis/fondo-dibujos-animados-elementos-matematicas_23-2148157890.jpg?size=626&ext=jpg';
        let fotos = [img1,img2,img3];
        
        this.state = { 
            //image1: fotos[foto]
            image1: 'https://i.pinimg.com/originals/5c/e7/0f/5ce70ff2c4d214ed6d037b9ee68278b3.jpg'//definir un valor inicial
           
    }
}
   


   componentDidMount(){
       
   

       setTimeout(() => { //cambiar informacion del estado
        
           this.setState({

               
               image1: 'https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg'
                // image1={segundo}
        
              // imagen2: 'https://concepto.de/wp-content/uploads/2013/08/matematicas-e1551990337130.jpg'
           })
        
          
       },5000)
     //cambiar cada 5s
       
}
     state = {}
     
    
        
      //alert(e.target.name + " : " + e.target.value)
     
    mirar = e=>{
        if (e.target.value != "juan") {
            console.log('correcto')
        }else{
            console.log('incorrecto')
        }
    }
    verficar =()=>{
       alert('ok, dont problem')
    }
    render(){

        return(
        
            <div style={{width: 400, height: 250, border: 'solid', margin: 35, background: 'green'}}>
                <p style={{color: 'orange'}}> 
                    email: <input type='email' 
                    style={{margin:20}} 
                    name= "email"
                    placeholder= "email"
                    value ={this.state.email}
                    onChange={this.mirar}
                   
                    ></input> 
                    <button onClick={this.verficar}> verificar </button>
                </p>
                <p>
                    vericar si su dirección de correo es correcta 
                </p>

                <img src={this.state.image1} style={{width:220,height:100, marginLeft:30}}></img>

             </div>
             
    

            
            
        )


    }
}






export default Segundo