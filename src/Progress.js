import React from 'react';

function Progress({expanded, done, setComplete, complete, setText , text}) {

    const [style, setStyle] = React.useState({});
    
    
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
            // I want to do it this way, but can't keep it from looping infinitely and crashing
            // let newState = text.map((line) => {
            //     line.loaded = true
            // })
            // })
            //setText(newState)
          }, 2000);

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