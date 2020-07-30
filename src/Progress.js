import React, { useEffect } from 'react';

const Progress = ({expanded, done, setComplete, complete, setText , text}) => {

    const [style, setStyle] = React.useState({});

    useEffect( () => {
            let timer = setTimeout(() => {
                console.log('hi')
                setComplete(true);
                // I want to do it this way, but can't keep it from looping infinitely and crashing
                // let newState = text.map((line) => {
                //     line.loaded = true
                // })
                // })
                //setText(newState)
              }, 2500);
            return () =>{
                clearTimeout(timer)
            }
        }, [])

    
    if (expanded){

        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`
            }
            setStyle(newStyle);
        }, 0);
    
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