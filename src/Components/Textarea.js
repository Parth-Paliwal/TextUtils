import React , {useState} from 'react'
export default function Textarea(props) {
    const [text , setText] = useState('enter text here');
    const upper = ()=>{
        console.log("upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.setalert("your text is now converted to uppercase.", "success");
    }
    const lower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.setalert("your text is now converted to lowercase.", "success");
    }
    const handleonchange = (event)=>{
        setText(event.target.value);
    }
    const clear=()=>{
        setText("");
        props.setalert("your text is now cleared.", "success");
    }
  return (
    <>
    <div className = "container" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
      <h1 className="my-3 ">{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control my-3" value={text} onChange={handleonchange} style={{backgroundColor : props.mode === 'dark'? 'grey' : 'white' , color : props.mode === 'dark'? 'white' : 'black'}} id="mybox" rows="15"></textarea>
                <button className="btn btn-primary mx-3"  onClick={upper} >convet to Uppercase</button>
                <button className="btn btn-primary mx-3"  onClick={clear} >clear text</button>
               
                <button className="btn btn-primary mx-3"  onClick={lower} >convet to lowercase</button>
            </div>
    </div>
    <div className="container" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
        <h2 className='my-3'>your text summary</h2>
        <p>{text.split(" ").length} words and {text.trim(" ").length} characters</p>
        <p>{text.split(" ").length* .008} Minutes to read</p>
    </div>
    </>
  )
}
