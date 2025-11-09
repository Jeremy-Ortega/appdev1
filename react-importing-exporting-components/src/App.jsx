import Gallery from "./components/Gallery";
import {Profile} from "./components/Gallery";

export default function App() {
  return (
    <>
    <h1 style={{ fontStyle: 'italic'}}> Imported component : </h1>
    <Gallery />
    <h1 style={{ fontStyle: 'italic'}}> Named export from Gallery : </h1>
    <Profile/>
    </>
  );
}

