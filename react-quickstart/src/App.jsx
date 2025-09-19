import './App.css'
import {useState} from 'react'

// Creating and nesting components
// Writing markup with JSX
// Adding styles
// Displaying data

// Conditional rendering 

// Done rendering lists
// Done responding to events / using hooks
// Done sharing data between components


function App() {
  const User = {
    name : "Jeremy",
    age : 20,
    imgUrl : "assets/sample.png",
    imgSize : 90,
  }

  const FavFood = [
    { title: 'Sinigang', id: 1 ,isSoup:true},
    { title: 'Fried Chicken', id: 2 ,isSoup:false},
    { title: 'Bread', id: 3 ,isSoup:false},
  ]
  
   const listItems = FavFood.map(FavFood =>
    <li key={FavFood.id} style={{color:FavFood.isSoup ? 'cyan' : 'orange'}}>
      {FavFood.title}
    </li>


   )
  // ============================

  let isLoading = false;

  if (isLoading) {
    isLoading = <DisplayYes/>
  } else{
    isLoading = <DisplayNo/>
  }

  function DisplayYes(){
    return(
      <>
      <h6>The image is showing!</h6>
      </>
    )
  }

  function DisplayNo(){
    return(
      <>
      <h6>The image is not showing..</h6>
      </>
    )
  }
  // ============================
  function MyButton(){
    function handleClick(){
      alert("You clicked me!");
    }
     
    return(
    <button onClick={handleClick}>
      I'm a button :D
    </button>
    );
  }

  function CountingButton(){
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return(
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
      );
  }

  // ============================

  return (
    <>
    <div>
      <h1>Welcome to my App</h1>
      <h4 style={{color:'lightcoral'}}>Hello I'm {User.name} <br />How do you do?</h4>
      <MyButton/>

      <h5 style={{color:'lightcoral'}}> These buttons update separately.</h5>
      <CountingButton/>
      <CountingButton/>
      
      <br />


      <img src={User.imgUrl} alt="Photo of the pokemon named Vaporeon"  
      style={{
        width:User.imgSize,
        height:User.imgSize
      }}/>

      <ul>{listItems}</ul>

    </div>

        {isLoading}

    </>
  )
}

export default App
