import React from 'react'

export default class extends React.Component {
    state = {
        speed: 2
    }
    
    handleSpeedChange = (e) => {
        if(parseFloat(e.target.value)) {
            this.setState({
                speed: e.target.value
            })
        }
    }

    render(){
        return(
            <div>
                <p>
                    Speed: {this.state.speed}
                    <input 
                        type="range"
                        min="0"
                        max="10"
                        step="1"
                        value={this.state.speed}
                        onChange={this.handleSpeedChange.bind(this)}
                    />
                </p>
            </div>
        )
    }
}


