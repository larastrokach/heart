
import { Component } from 'react';
import './App.css';
import { Heart } from './Heart';


// import heartOne from './heartOne.jpeg';

class App extends Component {
  render (){
  return (
    <div className="App">
                  
<Heart />
{/* <img  src = {heartOne} width= "100px" alt="heart"/> */}
    </div>
  );
}
}
export default App;
