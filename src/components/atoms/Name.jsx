import { Badges } from "./Badges";

 export const Name = (props) => { console.log (props)
    const noweimie = props.name.slice(6,20) + " Polska Górą!!1!";
    
   
    return <div id="Bieniaszewski2">{noweimie}
       {/* <Badges name = {noweimie}/> */}
     
      
    </div>
}