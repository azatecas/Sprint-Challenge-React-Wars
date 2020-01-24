import React, { useState } from 'react';
import CardStats from './CardStats';
import styled from "styled-components";


const Container = props => {
    return (
        <div>
        {props.data.map((item, index) =>            
            <CardStats key={index} data={item} /> 
            )}        
        </div>
    );
}



export default Container;