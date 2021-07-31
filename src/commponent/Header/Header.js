import React from 'react'
import Main from '../Main/Main'
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css'
import { Container, Button, Form } from 'react-bootstrap'
import { BsTypeUnderline, BsJustify, BsTextLeft, BsTextRight, BsTypeItalic, BsTextCenter, BsTypeBold } from 'react-icons/bs';

var text = document.getElementById('exampleForm.ControlTextarea1');

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
                <p>Write you Artical Here</p>
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

function TextRight() {
    console.log("Right Align Clicked");

}
function TextLeft() {
    console.log("Left Align Clicked");
    console.log(text);
  
}
function center() {
    console.log("Center Align Clicked");
}
function TextJustify() {
    console.log("Justify Align Clicked");
}
function TypeItalic() {
    console.log("Italic Clicked");
}
function TypeBold() {
    console.log("Bold Clicked");
}
function Underline() {
    console.log("Underline Clicked");
}
function generateHTML() {
    console.log("generateHTML Clicked");

}
