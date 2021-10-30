import React,{useState,useEffect} from 'react';
import '../style/quiz.css';

const Quiz = ({QuesAnsData,setTimeOut,setQuesNumber,quesNumber} ) => {
const [ques,setQues] = useState(null);
const [selectedAns, setSelectedAns] = useState(null);
const [className,setClassName] = useState("answer")

useEffect(()=>{
    setQues(QuesAnsData[quesNumber-1])
},[QuesAnsData,quesNumber])

const handleClick = (ans)=>{
    setSelectedAns(ans)
    setClassName("answer active")
}

    return (
        <div className='QuizContainer'>
            <div className="question">  {ques ? ques.question : null} </div>
            <div className="answers">
            {
               ques?  ques.answers.map(ans=>(
                    <div className={selectedAns === ans ? className : "answer"} onClick={()=>handleClick(ans)}>{ans.text}</div>
                ))
                : null
            }
            </div>
        </div>
    );
}

export default Quiz;
