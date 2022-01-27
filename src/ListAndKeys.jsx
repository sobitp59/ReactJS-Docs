import React from 'react';

function ListAndKeys(props){

const names = ['Sobit','Mohit','Rohit','Shayam','Krishna','Ankit'];
let id = 1;
const nameList = names.map((name) =>  <li key={id++}>{name}</li>);

    return (
        
        <>
            <h3>This is List and Keys</h3>
            <ul>{nameList}</ul>
            <hr/>
            
        </>
    )
}

export default ListAndKeys;