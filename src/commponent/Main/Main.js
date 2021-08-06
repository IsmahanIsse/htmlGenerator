import { Button } from 'react-bootstrap'
import React from 'react'
import './Main.css'


export default class Main extends React.Component {   
    render() {
        return (
            <div>
                <p className="mainTxt" id="words">Test TEXT</p>
                <Button variant="outline-warning" size="lg" onClick={myStyle}>Hello </Button>
            </div>
        )
    }
}

function myStyle() {
    const txt = document.getElementById('words');
    console.log(txt.textContent);
    txt.className = "italic";
}