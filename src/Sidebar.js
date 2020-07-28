import React from 'react';

function Sidebar() {

    return (
        <div 
            className={false ? "sidebar sidebar--expanded" : "sidebar"}
            onClick={console.log('toggel')} >
        </div>
         
    );
}

export default Sidebar;