import React from 'react';

function Line({line}){
    return(
        <div 
            className="line"
            style={{textDecoration: line.selected ? "line-through" : ""}} //change this to some sorta highlight
            //onclick here
        >
            {line.lineContent}
        </div>
    )
}

export default Line;