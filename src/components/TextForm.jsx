import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Enter text here...');
  const [TextColor, setTextColor] = useState('black');
  const [TextButton, setTextButton] = useState('Change Text Color');



const  handleOnClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Upeercase", "success");

}
const  lowerOnClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowecase", "success");


}
const  handleClearClick=()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared", "success");


}
const  handleColorClick=(event)=>{
    if(TextButton === 'Original Text Color'){
        setTextColor("Black");
        setTextButton("Change Text Color");

    } else {
        setTextColor("Green");
        setTextButton("Original Text Color");
        props.showAlert("Text color has been Changed", "warning");

    }
}
const  handleCopyClick=()=>{
    let copyText = document.getElementById('mybox');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copy to Clipbard", "success");

}
const  handleOnChange=(event)=>{
    setText(event.target.value);
}
    return (
        <>
            <div className='container my-3'>
            
                <h1 class="text-light">{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">Enter Text</label>
                    <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleOnChange} style={{ color: TextColor }}></textarea>
                </div>
                <button className='btn btn-dark mx-2' onClick={handleOnClick}>convert UpeerCase</button>
                <button className='btn btn-dark mx-2' onClick={lowerOnClick}>convert LowerCase</button>
                <button className='btn btn-dark mx-2' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-dark mx-2' onClick={handleColorClick}>{TextButton}</button>
                <button className='btn btn-dark px-3' onClick={handleCopyClick}>Copy Text</button>




            </div>
            <div className='container my-3'>
                <h2 class="text-light">Your Text Summery</h2>
                <p class="text-light">{text.split(" ").length}words and {text.length}characters </p>
                <h3 class="text-light">Preview</h3>
                <p class="text-light">{text}</p>
            </div>
        </>
    )
}
