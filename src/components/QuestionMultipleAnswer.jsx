import React from 'react';
import { useDispatch } from "react-redux";
import {
    setAnswer,
} from "../store/storeSlice";
  
const QuestionMultipleAnswer = (props) => {
    const dispatch = useDispatch();
    let question_value = props.question.value || [];
    const is_selected = (choice_value) => {
        return question_value.length>0 && question_value.indexOf(choice_value) != '-1';
    }
    
    function selectAnswer(current_value,choice_value){
        if(!current_value){
            current_value = []
        }
        if(props.question.multiple == "false"){
            current_value = [choice_value];
        }else{
            if(current_value && current_value.length>0 && current_value.indexOf(choice_value) != '-1'){
                current_value = current_value.filter((item) => {return item != choice_value});
            }else{
                current_value = [...current_value,choice_value];
            }
        };
        dispatch(
            setAnswer({
                index:props.index,
                value:current_value
            })
        );
    }
    let class_name;
    if(props.index>props.active){
        class_name = 'future';
    }
    if(props.index==props.active){
        class_name = 'current';
    }
    if(props.index<props.active){
        class_name = 'past';
    }
    function ShowAnswers(){
        return (
            <div className="answers_collection">
                {props.question.choices.map(function(choice, i){
                    return (
                        <div key={i}>
                            <input type={props.question.multiple == "false"?'radio':'checkbox'} value={choice.value} key={i} checked={is_selected(choice.value)} name={props.question.identifier} id={props.question.identifier+i} onChange={() => selectAnswer(props.question.value,choice.value)} /><label htmlFor={props.question.identifier+i} className="button_replacement">{choice.label}</label>
                        </div>
                    )
                })}
            </div>
        );
    }

    return (
        <div className={class_name+ ' question_item'}>
            <h4>{props.question.headline} 
                {props.question.multiple == "true" && 
                 <em>Multiple answers</em>
                }
                {props.question.required && 
                    <em>Required</em>
                }
                </h4>
            <ShowAnswers />
        </div>
    )
}


export default QuestionMultipleAnswer;