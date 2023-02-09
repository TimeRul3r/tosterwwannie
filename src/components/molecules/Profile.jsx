import { Name } from "../atoms/Name";
import { Badges } from "../atoms/Badges";

export const Profile = ({name}) => { console.log (name)
    
    return <div><Name name = {name}/></div>;
  }

  
export const Profile2 = ({name}) => { console.log (name)
    
    return <div><Badges name = {name}/></div>;
  }

