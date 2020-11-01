  
import React, { Component } from 'react';


export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {color: props.value}
    }
    clickToChangeColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return <div className="cell" style={{ backgroundColor: this.state.color }} onClick={()=>this.setState({color:'#333'})></div>
    }
}

Cell.defaultProps = {
    values: "#fff"
}