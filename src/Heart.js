import {Component} from "react";

import heartOne from './heartOne.jpeg';
import heartTwo from './heartTwo.jpeg';

export class Heart extends Component {

  

    state= {
        words: "Like us!",
        image: heartOne
    }
    // constructor() {
    //     super();

    //     this.state = {
    //      words: "Like us!",
    //      img: "./heartTwo.jpeg"
    //     }
    // }

    updateWords(){
        this.setState ({words: "Thank you! We love you, too!",
                        image: heartTwo
    
    })

}

 

    render (){
        return(
            <div>
             

                 <h1>  {this.state.words}</h1> 
                <img className = "img" onClick = {()=> this.updateWords()} 
                src = {this.state.image} width= "100px" alt="heart"
                 /> 
     
            
            </div>
        )
    }

}
