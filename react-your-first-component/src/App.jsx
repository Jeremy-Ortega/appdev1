import './App.css'
import Gallery from './components/Gallery'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <h1 style={{ fontStyle: 'italic'}}>This is a gallery component : </h1>
      <Gallery/>

      <h1 style={{ fontStyle: 'italic'}}>This is a react component : </h1>
      <Profile/>

    </>
  )
}

export default App
