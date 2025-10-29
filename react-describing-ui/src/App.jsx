import './App.css'

import Gallery from './components/Gallery'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import Item from './components/Item'
import List from './components/List'
import Cup from './components/Cup'
import RootComponent from './components/RootComponent'
import  {rootGreet} from './RootModule'

function App() {

  return (
    <>
      <TodoList/>
      <Gallery/>
      <Item/>
      <List/>
      <Cup/>
      <RootComponent/>

      {rootGreet()}
    </>
  )
}

export default App
