import React from 'react';


function InputForm({expanded}){
    if (expanded) {
        return (<div className='textbox-expanded'>
                <form className='poem-input'>
                    <textarea className='textbox-input' placeholder="add a poem here"></textarea>
                </form>
            </div>)
    }
    return (
        <div
            className="textbox"
        >
        </div>

    );
}

export default InputForm;