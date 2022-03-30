import React from 'react';
import { useDispatch } from "react-redux";
import {
    setAnswer,
} from "../store/storeSlice";
  
const Question = (props) => {
    const dispatch = useDispatch();
    const value = [];

    function selectAnswer(event){
        console.log(event.target.value);
        let current_value = [event.target.value];
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
                <input type="text" name={props.question.identifier} id={props.question.identifier} defaultValue={props.question.value} onBlur={selectAnswer} />
            </div>
        );
    }

    return (
        <div className={class_name+ ' question_item'}>
            <h4>{props.question.headline}</h4>
            <ShowAnswers />
        </div>
    )
}


export default Question;