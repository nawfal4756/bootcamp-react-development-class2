import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Hi() {
  return <div>
            <div className="heading">Hello <strong>Nawfal</strong>!</div>
            <ul>
              <li>I love to code</li>
              <li>Eat, sleep, code, repeat!</li> 
              <li>My age is: {10+9}</li>
            </ul>
          </div>
}

ReactDOM.render(<Hi/>,document.querySelector('#root'))