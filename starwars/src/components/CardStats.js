import React, { useState } from 'react';
import styled from "styled-components";


//style actual card with information on it
const SWCard = styled.div`
  background: rgba(235, 192, 117, 0.84);
  border-radius: 25px;
  color: black;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content:start;  
  margin-bottom: 20px;
`;

const CardStats = props => {

return ( 

        <SWCard>
        <p>Name: {props.data.name}</p>
        <p>Gender: {props.data.gender}</p>
        <p>Height: {props.data.height}</p>  
        <p>Weight: {props.data.mass}</p>
        <p>Eye Color: {props.data.eye_color}</p>       
        </SWCard>   
    
    );
}

export default CardStats;