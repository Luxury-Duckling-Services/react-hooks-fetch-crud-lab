import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {allQuestions , setAllQuestions }) {
  
  function deleteItem(idToBeDeleted) {
    
    fetch(`http://localhost:4000/questions/${idToBeDeleted}` , {
      method: "DELETE",
    })
    .then(r=> r.json())
    .then(()=>{
      setAllQuestions(allQuestions.filter(question=>{
        return !(question.id===idToBeDeleted)
      }))
    })

  }

  function updateItem(updatedAnswer , idToBeUpdated) {
    fetch(`http://localhost:4000/questions/${idToBeUpdated}` , {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: updatedAnswer,
      }),
    })
    .then(r=>r.json())
    .then()
  }
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        allQuestions.map( question=>{
          return <QuestionItem key={question.id} question={question} updateItem={updateItem} deleteItem={deleteItem}/>
        }
        )

      }</ul>
    </section>
  );
}

export default QuestionList;
