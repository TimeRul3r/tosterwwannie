import logo from "./logo.svg";
import "./App.css";
import { Name } from "./components/atoms/Name";
import { Profile, Profile2 } from "./components/molecules/Profile";

let testmetody = "jakieśzdanie";
testmetody.toUpperCase();

const updateTimeRul3r = (name) => {
  const newname = name.toUpperCase();
  return newname
}




const object = {torun:123, inowcrolaw:111,gniezno:100}
console.log("poland",object.torun )

const updatespace = () =>{ const spc = " "; return spc }

function App() {
  const nameOne = "Wiktoria Leśniarek"
  const imie = "Adam Borzęda Architektura Informacji"
  const nametwo = "Dawid Bieniaszewski"
  const nameinf = "Architektura"
  return (
    <div>
      
        
        <Profile name = {imie}/>
        <Profile2 name = {nametwo}/>

    </div>
   
    
  );
}

export default App;
