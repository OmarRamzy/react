
import React from 'react'

const person = (props) => {
    return (
        
          <div>
              <p onClick={props.click}>My name is {props.name}, and my age is a {props.age}</p>
              <p  onClick={props.click} >{props.children}</p>
              <input typt="text" value={props.name} onChange={props.changed} />
            </div>
    );
};

export default person ;