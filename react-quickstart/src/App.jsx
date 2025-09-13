import './App.css'


// Creating and nesting components
// Writing markup with JSX
// Adding styles
// Displaying data
// Conditional rendering 

function App() {
  const User = {
    name : "Jeremy",
    age : 20,
    imgUrl : "assets\sample.png",
    imgSize : 90
  }

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
      <h1>Welcome to my App</h1>
      <h4 style={{color:'lightcoral'}}>Hello I'm {User.name} <br />How do you do?</h4>
      <MyButton/>
      <br />

      <img src={User.imgUrl} alt="Photo of the pokemon named Vaporeon"  
      style={{
        width:User.imgSize,
        height:User.imgSize
      }}/>      
    </div>


    </>
  )
}

export default App
