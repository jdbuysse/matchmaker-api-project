import React, {useState} from 'react';
import './App.css';
//import Slider from './Slider';
import Line from './Line';

function App() {
 //we want each line to be a component I believe
  const [text, setText] = useState([
    {
      lineContent: "About suffering they were never wrong,",
      selected: false
    },
    {
      lineContent: "The old Masters: how well they understood",
      selected: false
    },
    {
      lineContent: "Its human position: how it takes place",
      selected: false
    },
    {
      lineContent: "While someone else is eating or opening a window or just walking dully along;",
      selected: false
    },
    {
      lineContent: "How, when the aged are reverently, passionately waiting",
      selected: false
    },
    {
      lineContent: "For the miraculous birth, there always must be",
      selected: false
    },
    {
      lineContent: "Children who did not specially want it to happen, skating",
      selected: false
    },
    {
      lineContent: "On a pond at the edge of the wood:",
      selected: false
    },
    {
      lineContent: "They never forgot",
      selected: false
    },
    {
      lineContent: "For the miraculous birth, there always must be",
      selected: false
    },

  ])

  const [expanded, setExpand] = useState(false)

  const toggleExpand = () => {
    expanded === false ? setExpand(true) : setExpand(false)
  }

  //this will change the text in state when I figure out 
  //how I want to handle my data
  const newText = thing => {
    setText(thing);
  }

  const openSidebar = (line) => {
    console.log('open sidebar line', line)
    toggleExpand()
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
              lineNumber={index}
              line={line}
              openSidebar={openSidebar}
            />
          ))}
      </div>
      </div>

    </div>
  );
}

export default App;
