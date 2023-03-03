import { Name } from "../atoms/Name";
import { Badges } from "../atoms/Badges";
import { useState } from "react";

export const Profile = ({name ,isopen, setisopen}) => { 
console.log(isopen)
    
if(isopen){
    return (
      <div>
        <Name name = {name}/>
        <button onClick={() =>  setisopen(!isopen )}> Ukryj {isopen}</button>
      </div>
  );
  }

  if(!isopen){
    return (
      <div>
        <button onClick={() =>  setisopen(!isopen )}> Pokaz</button>
      </div>
    );

  }
}

  
