import React from 'react';

function Line({line, openSidebar, lineNumber}){
    return(
        <div 
            className="line"
            onClick={() => openSidebar(lineNumber) }
        >
            {line.lineContent}
        </div>
    )
}

export default Line;