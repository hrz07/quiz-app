import React,{useState,useEffect} from 'react';


const Timmer = ({setStop,quesNumber}) => {

    const [timmer,setTimmer] = useState(30)
    useEffect(()=>{
        if(timmer === 0) return setStop(true);
        const interval = setInterval(()=>{
            setTimmer((prev)=> prev-1)
        },1000);
        return ()=> clearInterval(interval)
    },[setStop,timmer])


    useEffect(()=>{
        setTimmer(30);
    },[quesNumber])

    return timmer;
}

export default Timmer;
