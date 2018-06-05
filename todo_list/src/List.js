import React from 'react';


const List = props => (
    <ul>
        {
            props.items.map((item, index)=> <li key={index}>{item}<button remove={remove}>Delete</button></li>)
        }
    </ul>
);

export default List;