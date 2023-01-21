import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextContainer from './Components/TextContainer';

function App() {
  const[color,setColor] = useState("Black");
  const[access,setAccess] = useState("Edit Allowed");
  const[fontSize,setFontSize] = useState(16);
  const[fontStyle,setFontStyle] = useState("Arial");

  return (
    <div className="App">
      <Navbar 
         value1={{color,setColor}} 
         value2={{access,setAccess}}
         value3={{fontSize,setFontSize}}
         value4={{fontStyle,setFontStyle}}
         /> 

      <TextContainer
       value1={{color}}
       value2={{access}}
       value3={{fontSize}}
       value4={{fontStyle}}
       />
      
    </div>
  );
}

export default App;
