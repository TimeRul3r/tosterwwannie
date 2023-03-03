import { Name } from "../atoms/Name";
import { Badges } from "../atoms/Badges";
import { useState } from "react";

export const Profile = ({name ,isopen, setisopen}) => { 

    
    return <div><Name name = {name}/>
      <button onMouseEnter={() =>  setisopen(!isopen )}>Counter {isopen}</button>
    </div>;
  }
