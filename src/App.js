import React, {useState} from 'react';
import './App.css';
import Line from './Line';
import Sidebar from './Sidebar';

function App() {
  const [text, setText] = useState([
    {
      lineContent: "About suffering they were never wrong,",
      selected: 0
    },
    {
      lineContent: "The old Masters: how well they understood",
      selected: 1
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
    <main>
        <Sidebar expanded={expanded}/>
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
