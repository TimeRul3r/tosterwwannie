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


  const users = ["Dawid", "Adam", "Wiktoria"];

  return (
    <div>
      
        
        <Profile name = {users[0]}/>
        <Profile2 name = {users[1]}/>

    </div>
   
    
  );
}

export default App;
