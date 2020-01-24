import React, { useState } from 'react';
import CardStats from './CardStats';
import styled from "styled-components";


const SWParentCont= styled.div`
  display: flex;
  
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;  

`;


const Container = props => {
    return (
        <SWParentCont>
        {props.data.map((item, index) =>            
            <CardStats key={index} data={item} /> 
            )}        
        </SWParentCont>
    );
}



export default Container;