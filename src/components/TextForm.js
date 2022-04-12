import React,{useState} from 'react'

export default function TextForm (props) {
    const[text,setText]=useState("");
    const handchge=(event)=>{
        console.log("On change");
        setText(event.target.value); // event gives the synthetic event in which for text we use target (i.e it gives text) and from target we select the value(for what value we want)
    }
    const handUpClick=()=>{
      console.log("Button for UpperCase pressed");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
        
    }
    const handDwClick=()=>{
      console.log("Button for LowerCase pressed");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
    }
    const handCopy=()=>{
      console.log("handcopy function executed");
      // if I want to show that highlighted that blue line then I SHOULD USE THAT CWH CODE  BY SELECTING THE ELEMENTBYID SOMETHING LIKE THAT..
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied To Clipboard","success");
    }
    const handClear=()=>{
      console.log("Clear function executed");
      setText('');
      props.showAlert("Text Cleared","success");

    }
  return (
      <>
      <div className='container'>
      <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control"  value={text} onChange={handchge} placeholder="Enter text here" id="mybox" rows="8"></textarea>
    <button className='btn btn-primary my-3' onClick={handUpClick}>Convert To UpperCase</button>
    <button className='btn btn-primary my-3 mx-2' onClick={handDwClick}>Convert To LowerCase</button>
    <button className='btn btn-primary my-3 mx-2' onClick={handClear}>Clear Text</button>
    <button className='btn btn-primary my-3 mx-2' onClick={handCopy}>Copy Text</button>
    </div>
    </div>

    <div className="container my-4">
      <h2>Details about Text</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
    </div>
 </>
  )
}

