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
      lineContent: "That even the dreadful martyrdom must run its course",
      selected: 9
    },
    {
      lineContent: "Anyhow in a corner, some untidy spot",
      selected: 10
    },
    {
      lineContent: "Where the dogs go on with their doggy life and the torturer's horse",
      selected: 11
    },
    {
      lineContent: "Scratches its innocent behind on a tree.",
      selected: 12
    },
    {
      lineContent: "In Breughel's Icarus, for instance: how everything turns away",
      selected: 13
    },
    {
      lineContent: "Quite leisurely from the disaster; the ploughman may",
      selected: 14
    },
    {
      lineContent: "Have heard the splash, the forsaken cry,",
      selected: 15
    },
    {
      lineContent: "But for him it was not an important failure; the sun shone",
      selected: 16
    },
    {
      lineContent: "As it had to on the white legs disappearing into the green",
      selected: 17
    },
    {
      lineContent: "Water, and the expensive delicate ship that must have seen",
      selected: 18
    },
    {
      lineContent: "Something amazing, a boy falling out of the sky,",
      selected: 19
    },
    {
      lineContent: "Had somewhere to get to and sailed calmly on.",
      selected: 20
    },
  ])
  
  const [expanded, setExpand] = useState(false)

  const [textBoxExpanded, setTextBoxExpand] = useState(false)

  const [selectedLine, setCurrentLine] = useState({
    currentLine: 0
  })
  const [loadComplete, setComplete] = useState(false);

  
  const toggleExpand = () => {
    if (expanded === false) {
      setExpand(true)
    }
    else {
      setExpand(false)
      setComplete(true)
    }
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
