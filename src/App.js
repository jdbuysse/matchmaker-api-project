import React, {useState} from 'react';
import './App.css';
import Line from './Line';
import Sidebar from './Sidebar';
import InputForm from './InputForm';
import Progress from './Progress';

const t1 = require('./demos1.json')
const t2 = require('./demos2.json')

function App() {


  const [text, setText] = useState([
    {
      lineContent: "About suffering they were never wrong,",
      selected: 0,
      loaded: false
    },
    {
      lineContent: "The old Masters: how well they understood",
      selected: 1,
      loaded: false
    },
    {
      lineContent: "Its human position: how it takes place",
      selected: 2
    },
    {
      lineContent: "While someone else is eating or opening a window or just walking dully along;",
      selected: 3
    },
    {
      lineContent: "How, when the aged are reverently, passionately waiting",
      selected: 4
    },
    {
      lineContent: "For the miraculous birth, there always must be",
      selected: 5
    },
    {
      lineContent: "Children who did not specially want it to happen, skating",
      selected: 6
    },
    {
      lineContent: "On a pond at the edge of the wood:",
      selected: 7
    },
    {
      lineContent: "They never forgot",
      selected: 8
    },
    {
      lineContent: "For the miraculous birth, there always must be",
      selected: 9
    },
  ])
  
  const [expanded, setExpand] = useState(false)

  const [textBoxExpanded, setTextBoxExpand] = useState(false)

  const [selectedLine, setCurrentLine] = useState({
    currentLine: 0
  })
  const [loadComplete, setComplete] = useState(false);

  
  const toggleExpand = () => {
    expanded === false ? setExpand(true) : setExpand(false)
  }

  const toggleTextBoxExpand = () => {
    textBoxExpanded === false ? setTextBoxExpand(true) : setTextBoxExpand(false)
  }

  const openSidebar = (line) => {
    toggleExpand()
    setCurrentLine({
      currentLine: line
    })
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>
    <main>
        <Sidebar 
          expanded={expanded} 
          selectedLine={selectedLine.currentLine} 
          data={[t1,t2]}
          complete = {loadComplete} //change this to track text.loaded
          //complete = {text[selectedLine.currentLine].loaded}
          
        />
        <Progress 
          expanded={expanded} 
          done="100" 
          setComplete={setComplete} 
          setText={setText}
          complete={loadComplete}
          text = {text}
        />
        <button className="text-input-button" onClick={toggleTextBoxExpand}>Enter text</button>
        <InputForm expanded={textBoxExpanded} />
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
     </main>

    </div>
  );
}

export default App;
