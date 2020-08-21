import React, { useEffect } from 'react';

const Progress = ({expanded, done, setComplete, complete}) => {

    const [style, setStyle] = React.useState({});
    
    useEffect( () => {
            let timer = setTimeout(() => {
                setComplete(true);
            }, 2000);

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
            <div className='progress-bar'>
            <div className='progress'>
                <div className='progress-done' style={style}>
                    {complete ? `Complete`: `Running query...`} 
                </div>
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