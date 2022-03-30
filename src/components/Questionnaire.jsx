import React from 'react';
import { useSelector } from "react-redux";
import QuestionMultipleAnswer from './QuestionMultipleAnswer';
import Question from './Question';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Questionnaire = () => {
    const navigate = useNavigate();
    let form_data = useSelector((state) => state.store.form);
    const [activeState, setActiveState] = useState(0);
    const [prevVisibility, setPrevVisibility] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const moveNext = function(){
        if(form_data.questions[activeState].required && (!form_data.questions[activeState].value || form_data.questions[activeState].value.length==0)){
            setErrorMessage('Answer is required');
            return false;
        }else{
            setErrorMessage(''); 
        };
        setActiveState(activeState+1);
    }

    const movePrev = function(){
        setActiveState(activeState-1);
    }
    const checkResults = function(){
        navigate("/results");
    }
    return (
        <div className="all_app_holder">
            <h3>{form_data.name}</h3>
            <p>{form_data.description}</p>
            <div className="questions_holder">
                {form_data.questions.map(function(question, i){
                    switch(question.question_type) {
                        case 'multiple-choice':
                            return <QuestionMultipleAnswer question={question} key={i} index={i} active={activeState} />
                        break;
                        default:
                            return <Question question={question} key={i} index={i} active={activeState} />
                        break;
                    }
                })}
                <div className="buttons_holder">
                    <div className={errorMessage != ''?"visible error_message":"error_message"}>{errorMessage}</div> 
                    <div>
                        {activeState>0 && 
                            <a href="#" className="prev_arrow" onClick={() => movePrev()}></a>
                        }
                    </div>
                    <div>
                        {activeState<form_data.questions.length-1 && 
                            <a href="#" onClick={() => moveNext()}></a>
                        }
                        {activeState==form_data.questions.length-1 && 
                            <span href="#" onClick={() => checkResults()}>Check results</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Questionnaire;