import React from 'react';

function Sidebar({expanded}) {

    return (
        <div 
            className={expanded ? "sidebar-expanded" : "sidebar"}
            onClick={console.log('toggel')} >
        </div>
         
    );
}

export default Sidebar;