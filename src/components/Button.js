import "../style.css";
import React from "react";
import PropTypes  from "prop-types";

function Button(props){
    // Let's define the style here
    
    const style = {
        backgroundColor: props.color
    }

    function onClick(event){
        console.log("Clicked");
    }

    return(
        <button className="btn" style={style} onClick={onClick}>
            {props.text}
        </button>
    )
}

Button.defaultProps = {
    title: "Button",
    color: "steelBlue",
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
export default Button;