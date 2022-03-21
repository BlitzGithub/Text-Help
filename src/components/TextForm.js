import React, {useState} from 'react'

export default function TextForm(props) {
      

      const [text, setText] = useState('');

      const handleClearClick=()=>{
            setText('');
            props.showalert("Content Cleared!","success");
      }

      const handleUpperClick=() =>{
            let newText = text.toUpperCase();
            setText(newText);
            props.showalert("Content Converted to UpperCase!","success");
      }
      const handleLowerClick=() =>{
            let newText = text.toLowerCase();
            setText(newText);
            props.showalert("Content Converted to LowerCase!","success");
      }
      const handleOnChange=(event) =>{
            setText(event.target.value);
      }
      return (
            <>
            <div className='container' style={{color: props.mode === 'light'?'black':'cadetblue'}}>
                  <div className='mb-3'>
                        <h3>ENTER TEXT HERE</h3>
                        <div>
                              <textarea className="form-control" id="text-box" rows="8" style={{backgroundColor: props.mode === 'light'?'white':'black', color: props.mode === 'light'?'black':'white'}} placeholder='Type Here' value={text} onChange={handleOnChange}></textarea>
                        </div>
                        <button disabled={text.length === 0}  className="btn btn-success mx-2 my-2" onClick={handleUpperClick}>Convert to UpperCase</button>
                        <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleLowerClick}>Convert to LowerCase</button>
                        <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                  </div>
            </div>
            <div className="container" style={{color: props.mode === 'light'?'black':'cadetblue'}}>
                  <h4>Your Text Summary</h4>
                  <p>{text.split(' ').filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</p>
                  <p>{text.split(' ').filter((element)=>{return element.length !== 0}).lengthll * 0.008} Minutes Required to Read</p>
            </div>
            </>
      )
}