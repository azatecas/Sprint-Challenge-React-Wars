import React, { useState } from 'react';


const CardStats = props => {
    // console.log(`this is from Card.js`, props);

return (
    <div>

        <div>
        <p>Name: {props.data.name}</p>
        <p>Height: {props.data.height}</p>  
        <p>Weight: {props.data.mass}</p>
        <p>Eye Color: {props.data.eye_color}</p>       
        </div>
    
    </div>
);
}





export default CardStats;