import React, {useState} from 'react';
import './App.css';
//import Slider from './Slider';
import Line from './Line';

function App() {
 //we want each line to be a component I believe
  const [text, setText] = useState([
    {
      lineContent: "test",
      selected: false
    },
    {
      lineContent: "test2",
      selected: false
    }
  ])

  //this will change the text in state when I figure out 
  //how I want to handle my data
  const newText = thing => {
    setText(thing);
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="parent">
        <div className="poem-text">
          {text.map((line, index) => (
            <Line
              key={index}
              line={line}
            />
          ))}
      </div>
      </div>

    </div>
  );
}

export default App;
