import React from 'react'
import Main from '../Main/Main'
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css'
import { Container, Button, Form } from 'react-bootstrap'
import { BsTypeUnderline, BsJustify, BsTextLeft, BsTextRight, BsTypeItalic, BsTextCenter, BsTypeBold } from 'react-icons/bs';


export default function Header() {
    return (
        <div>
            <Container>
                <div className="pragraphStyle">
                    <h1>Html Generator</h1>
                    <Button variant="outline-warning" size="lg" onClick={TextLeft} ><BsTextLeft /></Button>{' '}
                    <Button variant="outline-warning" size="lg" onClick={center}><BsTextCenter /></Button>{' '}
                    <Button variant="outline-warning" size="lg" onClick={TextRight}><BsTextRight /></Button>{' '}
                    <Button variant="outline-warning" size="lg" onClick={TextJustify}><BsJustify /></Button>{' '}
                    <Button variant="outline-warning" size="lg" onClick={TypeItalic}><BsTypeItalic /></Button>{' '}
                    <Button variant="outline-warning" size="lg" onClick={TypeBold}><BsTypeBold /></Button>{' '}
                    <Button variant="outline-warning" size="lg" onClick={Underline}><BsTypeUnderline /></Button>{''}
                </div>
                <p id="centence">Write you Artical Here </p>
                <Form>
                    {/* <Form.Label></Form.Label> */}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={15} cols={65}/>
                    </Form.Group>
                    <Button variant="primary" onClick={generateHTML}>
                        Save
                    </Button>
                </Form>
            </Container>
            <Main />
        </div>
    );
}

function TextLeft() {
    const txt = document.getElementById('centence');
    txt.className = "alignLeft";
    console.log(txt.textContent);

    
  }

  function center() {
    const txt = document.getElementById('centence');
    txt.className = "alignCenter";
    console.log(txt.textContent);

  }

function TextRight() {
    const txt = document.getElementById('centence');
    txt.className = "alignRight";
    console.log(txt.textContent);

}
function TextJustify() {
    const txt = document.getElementById('centence');
    txt.className = "alignJustify";
    console.log(txt.textContent);

}
function TypeItalic() {
    const txt = document.getElementById('centence');
    txt.className = "italic";
    console.log(txt.textContent);

}
function TypeBold() {
    const txt = document.getElementById('centence');
    txt.className = "bold";
    console.log(txt.textContent);

}
function Underline() {
    const txt = document.getElementById('centence');
    txt.className = "underLine";
    console.log(txt.textContent);

}
function generateHTML() {
    console.log("generateHTML Clicked");

}
