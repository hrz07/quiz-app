import React,{useRef} from 'react';
import '../style/start.css';

const Start = ({setUserName}) => {
    const inputRef = useRef();
    const handleClick = ()=>{
        inputRef.current.value &&  setUserName(inputRef.current.value);
    }
    return (
        <div className='start' >
            <input placeholder="Enter Your name"  className="startInput"  ref={inputRef}/>
            <button className="startBtn" onClick={handleClick} >Start</button>
        </div>
    );
}

export default Start;
