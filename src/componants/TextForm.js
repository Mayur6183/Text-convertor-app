import React,{useState} from 'react'    // useState: They let you use state and other React features without writing a class.

export default function TextForm(props) {

    // Below logic for uppercase conversion 

    const handleUPClick=()=>{
        // console.log("Uppercase Was clicked" + text);
        let newtext=text.toUpperCase(); // 
        setText(newtext)
       props.showAlert("Converted to Uppercase  ","Success")
    }

//  Below logic for lower case conversion

    const handleLOClick=()=>{
       
        let newtext=text.toLowerCase(); // 
        setText(newtext)
        props.showAlert("Converted to Lowercase Text ","Success")
    }

    const CapitalfirstletterClick=()=>{
       
        let newtext = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // 
        setText(newtext)
        props.showAlert("Converted to Capitalize  ","Success")
    }

    const HandleExtraSpace=()=>{
       
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Removed Extra Spaces","Success")
       
    }

    const Cleartext=()=>{
       
        let newtext=""; 
        setText(newtext)
    }


    
    // if we do not pass event then text value does not change

    const handleOnChange=(event)=>{  
        // console.log("On change");
        setText(event.target.value) // meaning of this line is event target value present inside variable text so we can modify 
    }

     const [text, setText] = useState(""); // accept (text is variable to accept string) and anather place is 
                                                          // settext place is to change the string.
     //text="To change the states"; // wrong way to chage state.
    //  setText("New Text")// Right way to change State
   
  return (
   
<>

<div className="container shadow-container">
<h1> {props.heading} </h1>
<div className="mb-3">
<textarea className="form-control" id="MyBox" value={text} placeholder='Enter Your Text ' onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2   my-2" onClick={handleUPClick}>Convert to uppercase</button>
<button className="btn btn-info    mx-2   my-2"    onClick={handleLOClick}>Convert to Lowercase</button>
<button className="btn btn-success mx-2   my-2" onClick={CapitalfirstletterClick}>Convert to Capitalize</button>
<button className="btn btn-secondary mx-2 my-2" onClick={HandleExtraSpace}>Remove Extra Spaces</button>
<button className="btn btn-warning mx-2   my-2" onClick={Cleartext}>ClearText</button>
</div>
    <div className="container my-3 shadow-container" style={{backgroundColor:"lightblue"}}>
        <h2>Your Text Summery</h2>
        <p> { text.trim() === "" ? 0 : text.trim().split(/\s+/).length } Words and {text.length} Characters
        </p>
        <p>  { text.trim() === "" ? 0 : (0.008 * text.trim().split(/\s+/).length).toFixed(2) } Minutes to read
        </p>
    </div>
</>
  )
}
