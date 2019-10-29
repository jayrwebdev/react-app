import React from 'react';
import './css/style.css'


function Card(props) {

    return (
        <div className="card"row="col-3" onClick={props.onClick}>
            <img width="250px" height="250" id={props.id}src={props.src} alt={props.name} className="img-thumbnail"/>
        </div>
    )

}
export default Card
