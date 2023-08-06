import { Component } from "react";
import './style.css'

export class Button extends Component {
    
    render() {
        const {text, Click, disabled} =  this.props
        return (
            <button disabled={disabled} className="button" onClick={Click}>
                {text}
            </button>
        )
    }
}