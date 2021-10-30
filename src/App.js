import {useState,useEffect,useMemo} from 'react';
import Quiz from './components/Quiz';
import data from './components/Data'
import Timmer from './components/Timmer';
import Start from './components/Start';
import './style/app.css'


function App() {
  const [userName,setUserName] = useState(null);
  const [quesNumber,setQuesNumber] = useState(1);
  const [stop,setStop] = useState(false);
  const [earned,setearned] = useState("$ 0")
  const QuesAnsData = data;


  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"}
    ].reverse(),
  []) ;


  useEffect(()=>{
    quesNumber > 1 && setearned(moneyPyramid.find((m) => m.id === quesNumber-1).amount)
  },[moneyPyramid,quesNumber])

  return (
    <div className='app'>
      {userName ? (
        <>
        <div className="main">
        {stop ? (
          <h1 className="endText" >You earned: {earned} </h1>
          ) : (
          <>
            <div className="top">
              <div className="timmer"> <Timmer  setStop={setStop} quesNumber={quesNumber} /> </div>
            </div>
            <div className="bottom">
                <Quiz
                  QuesAnsData={QuesAnsData}
                  setStop={setStop}
                  setQuesNumber={setQuesNumber} 
                  quesNumber={quesNumber}
                />
            </div>
          </>
          )
        }
          
      </div>

     <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((item)=>(
            <li className={quesNumber === item.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListNumber">{item.id}</span>
            <span className="moneyListAmount">{item.amount}</span>
            </li>
          ))}
        </ul>      
     </div>
        </>

      ) : <Start  setUserName={setUserName} /> }
        

    </div>
  );
}

export default App;
