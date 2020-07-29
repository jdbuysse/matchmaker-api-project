import React from 'react';
import LineCard from './LineCard'

function Sidebar({ expanded, selectedLine, data }) {
    if (expanded) {
        return (<div className='sidebar-expanded'>
            {data.map((datum, index) => (
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