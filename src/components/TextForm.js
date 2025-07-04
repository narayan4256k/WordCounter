import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText] =useState("");
  const uppercase =() =>{
    let uppertext = text.toUpperCase();
    setText(uppertext);
    props.showAlert("Converted To Uppercase","success");
  }
  const lowercase =()=>{
    let lowertext=text.toLowerCase();
    setText(lowertext);
    props.showAlert("Converted To Lowercase","success");
  }
  const clear =()=>{
    let newtext='';
    setText(newtext);
    props.showAlert("Text Cleared","success");
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard ✅","success");
  };
  
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  
  return (
    <>
    <div className='container my-5' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>      
       <h1>{props.heading}</h1>  
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? 'rgb(28 80 180)' : 'white', color: props.mode === 'dark' ?'white':'black'}} id="myText" value={text} onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-3"onClick={uppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={lowercase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={clear}>Clear</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy to Clipboard</button>
    </div>
    <div className="container my-5"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>Your text Summary</h1>
      <p>Your text has {wordCount} words and {charCount} characters</p>
    </div>
    </>
  )
}