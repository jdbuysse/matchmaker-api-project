import React from 'react';
import LineCard from './LineCard'

function Sidebar({ expanded, complete, data, selectedLine }) {

    if (expanded && complete) {
        return (<div className='sidebar-expanded'>
            {data[selectedLine].map((datum, index) => (
                <LineCard
                    data={datum}
                    key={index}
                />
            ))}
            </div>)
    }
    return (
        <div
            className="sidebar"
        >
        </div>

    );
}

export default Sidebar;