import React from 'react';

function Progress({expanded, done}) {

    const [style, setStyle] = React.useState({});
    const [complete, setComplete] = React.useState(false);

    

    if (expanded){

        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`
            }
            setStyle(newStyle);
        }, 0);
    
        setTimeout(() => {
            setComplete(true);
        }, 5000);

        return(
            <div className='progress'>
                <div className='progress-done' style={style}>
                    {complete ? `Complete`: `Running query...`} 
                </div>
            </div>
        )
    }
    return(
        <div>

        </div>
    )

}

export default Progress;