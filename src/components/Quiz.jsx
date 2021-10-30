import React,{useState,useEffect} from 'react';
import useSound from 'use-sound'
import play from '../assets/play.mp3'
import wait from '../assets/wait.mp3'
import wrong from '../assets/wrong.mp3'
import correct from '../assets/correct.mp3'
import '../style/quiz.css';

const Quiz = ({QuesAnsData,setStop,setQuesNumber,quesNumber} ) => {
const [ques,setQues] = useState(null);
const [selectedAns, setSelectedAns] = useState(null);
const [className,setClassName] = useState("answer")
const [letsPlay] = useSound(play)
const [correctAnswer] = useSound(correct)
const [wrongAnswer] = useSound(wrong)

useEffect(()=>{
    letsPlay()
},[letsPlay]);




useEffect(()=>{
    setQues(QuesAnsData[quesNumber-1])
},[QuesAnsData,quesNumber])



const delay = (duration,callback)=>{
    setTimeout(()=>{
        callback()
    },duration)
}


const handleClick = (ans)=>{
    setSelectedAns(ans)
    setClassName("answer active")
    delay(3000,()=>
    setClassName(ans.correct ? "answer correct" : "answer wrong"));

    delay(5000,()=>{
        if(ans.correct){
            correctAnswer()
            delay(1000,()=>{
                setQuesNumber((prev)=> prev + 1)
                setSelectedAns(null);
            })
        }else{
            wrongAnswer();
            delay(1000,()=>{
                setStop(true);
            })
        }
    })
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
