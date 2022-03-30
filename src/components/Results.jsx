import React from 'react';
import { useSelector } from "react-redux";

const Results = () => {
    let form_data = useSelector((state) => state.store.form);
    console.log(form_data.questions);
    return (
        <div className="all_app_holder">
            <h3>Check your answers</h3>
            <div className="answers_holder">
                {form_data.questions.map(function(question, i){
                    return (
                        <div key={i}>
                            <h4>{question.headline}</h4>
                            <div className="answers_reply">
                            {question.value?.map(function(value_item, j){
                                return (
                                    <span key={j}>{value_item}</span>
                                )
                            })}
                            </div>
                            <p></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Results;