import React from "react";
function Card(props){
    console.log(props);
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.url} alt=" " />
            <p>{props.explanation}</p>
        </div>
    );
}
export default Card;