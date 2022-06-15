import React, { useState , useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [allQuestions , setAllQuestions] = useState([])

  useEffect( ()=>{
    fetch('http://localhost:4000/questions')
    .then(r=>r.json())
    .then(questions => {
      setAllQuestions(questions)
      console.log(questions)
    })
  } , [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ?
      
      <QuestionForm setAllQuestions={setAllQuestions} allQuestions={allQuestions} /> : 
      
      <QuestionList setAllQuestions={setAllQuestions} allQuestions={allQuestions}/>}
    </main>
  );
}

export default App;
