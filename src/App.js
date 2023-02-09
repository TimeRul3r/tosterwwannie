import logo from "./logo.svg";
import "./App.css";
import { Name } from "./components/atoms/Name";
import { Profile, Profile2 } from "./components/molecules/Profile";
import { Badges } from "./components/atoms/Badges";
import { badges2 } from "./components/atoms/Badges";

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


  const users = [{name: "Dawid", age: 20, badges:[]}, {name: "Adam", age: 21, badges:[]},{name: "Wiktoria", age: 22, badges:[]}];


  return (
    <div>
      {users.map((user)=>{
        return <Profile name = {user.name}/>
      })} 
      
      {users.map((user)=>{
        return <Profile name = {user.age}/>
      })} 

        {users.map((user)=>{
        return <Profile name = {user.badges}/>
      })} 

  {badges23.map((xyz)=>{
    return <Badges rank = {xyz.rank}/>
  })} 


  
        {/* <Profile name = {users[0].name}/> */}
        {/* <Profile2 name = {users[1].name}/> */}

    </div>
   
    
  );
}

export default App;
