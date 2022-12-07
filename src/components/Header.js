import React from "react";
// import PropTypes  from "react";
import Button from "./Button";
import "../style.css";


function Header(props){
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button text="Add" color="green" />
        </header>
    )
}

Header.defaultProps = {
    title: 'This is default title'
}

//Header.protoType = {
//    title: PropTypes.String.isRequired
//}

export default Header;