import React from 'react';

function Line({line, openSidebar, lineNumber}){
    return(
        <div 
            className="line"
            //style={{textDecoration: line.selected ? "line-through" : ""}} //change this to some sorta highlight
            onClick={() => openSidebar(lineNumber) }
        >
            {line.lineContent}
        </div>
    )
}

export default Line;