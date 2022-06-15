import React from "react";

function QuestionItem({ question , deleteItem , updateItem }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(e) {
    let idToBeDeleted = id

    deleteItem(idToBeDeleted)
  }

  function handleChange(e) {
    let updatedAnswer = e.target.value
    let idToBeUpdated = id
    updateItem( updatedAnswer , idToBeUpdated)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label onChange={handleChange}>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={e=>handleDelete(e)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
