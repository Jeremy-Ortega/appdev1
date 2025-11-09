import './App.css'
import Challenge from './Challenge'

export default function TodoList() {

  return (
    // <>
    // {/* // Not working if copy pasted */}
    // <h1>Hedy Lamarr's Todos</h1>
    // <img 
    //   src="https://i.imgur.com/yXOvdOSs.jpg" 
    //   alt="Hedy Lamarr" 
    //   class="photo"
    // >
    // <ul>
    //     <li>Invent new traffic lights
    //     <li>Rehearse a movie scene
    //     <li>Improve the spectrum technology
    // </ul>





    // </>


    /* 1. Return a single root element  */

    // <div>
    // <h1>Hedy Lamarr's Todos</h1>
    // <img 
    //   src="https://i.imgur.com/yXOvdOSs.jpg" 
    //   alt="Hedy Lamarr" 
    //   class="photo"
    // >
    // <ul>
    //     <li>Invent new traffic lights
    //     <li>Rehearse a movie scene
    //     <li>Improve the spectrum technology
    // </ul>
    // </div>


    /* 2. Close all the tags  */

  // <>
  //     <h1>Hedy Lamarr's Todos</h1>
  //     <img 
  //       src="https://i.imgur.com/yXOvdOSs.jpg" 
  //       alt="Hedy Lamarr" 
  //       class="photo"
  //     />
  //     <ul>
  //         <li>Invent new traffic lights</li>
  //         <li>Rehearse a movie scene</li>
  //         <li>Improve the spectrum technology</li>
  //     </ul>
  // </>

    /* 3. camelCase all most of the things!  */
  <>
  {/* //  Challenge 1 of 1: Convert some HTML to JSX */}

        <Challenge/>
        

      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo"
      />
      
      <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
      </ul>


  </>

 


  )
}

