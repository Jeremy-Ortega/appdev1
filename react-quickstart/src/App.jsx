import './App.css'


// Creating and nesting components
// Writing markup with JSX
// Adding styles
// Displaying data
// Conditional rendering

function App() {

  function MyButton(){
    return(
    <button>
      I'm a button :D
    </button>
    );
  }

  return (
    <>
    <div>
      <h1>Hi, welcome to my App</h1>
      <h4 >Hello<br />How do you do?</h4>
      <MyButton/>
    </div>


    </>
  )
}

export default App
