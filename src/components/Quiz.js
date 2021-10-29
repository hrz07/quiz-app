import React from 'react';
import '../style/quiz.css';

const Quiz = () => {



    return (
        <div className='QuizContainer'>
            <div className="question">
                who is the best ?
            </div>
            <div className="answers">
                <div className="answer">option</div>
                <div className="answer">option</div>
                <div className="answer">option</div>
                <div className="answer">option</div>
            </div>
        </div>
    );
}

export default Quiz;
