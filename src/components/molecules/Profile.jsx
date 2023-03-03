import { Name } from "../atoms/Name";
import { Badges } from "../atoms/Badges";
import { useState } from "react";

export const Profile = ({name ,liczba, ustawNowaLiczbe}) => { 

    
    return <div><Name name = {name}/>
      <button onMouseEnter={() =>  ustawNowaLiczbe(liczba +1)}>Counter {liczba}</button>
    </div>;
  }
