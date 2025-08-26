import React from 'react'
import './App.css'

function App() {
  const user = {
    name: "Jeremy Ortega",
    course: "BS Information Technology 3rd Year",
    funFact: "I can make my ears move",
    whyLearnReact: "I've heard praises of react library ever since 2nd year of college. It's features such as server-side rendering, component-based, and using jsx is great. Compared to an ordinary html,css and javascript, React makes it relatively easier and scalable due to it being component-based."
  }
  return (
    <>
        <div className="container">
      <h1 className="title">Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Course:</strong> {user.course}</p>
      <p><strong>Fun Fact:</strong> {user.funFact}</p>
      <div className="box">
        <h2>Why I want to learn React </h2>
        <p>{user.whyLearnReact}</p>
      </div>
    </div>
    </>
  )
}

export default App
