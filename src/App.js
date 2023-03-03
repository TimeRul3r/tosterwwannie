import "./App.css";
import { Profile, Profile2 } from "./components/molecules/Profile";
import { useState } from "react";

const users = [{name: "Dawid", age: 20, badges:[]}, {name: "Adam", age: 21, badges:[]},{name: "Wiktoria", age: 22, badges:[]}];



function App() {
  const [isopen, setisopen] = useState(true)



  return (
    <div>
      {users.map((user)=>{
        return <Profile name = {user.name} isopen={isopen} setisopen={setisopen}/>
      })} 
      

    </div>
   
    
  );
}

export default App;
