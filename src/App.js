import logo from "./logo.svg";
import "./App.css";

let testmetody = "jakieśzdanie";
testmetody.toUpperCase();

const updateTimeRul3r = (name) => {
  const newname = name.toUpperCase();
  return newname
}

const updateAdam = (name) => {
  let text = name;
  text = text.replaceAll("Architektura","Informacji");
  text = text.replaceAll("architektura","informacji");
  return text;
}
  const UpdateName2 = (props) => { console.log (props)
    const noweimie = props.name.slice(6,20) + " Polska Górą!!1!";
    
   
    return <div id="Bieniaszewski2">
      {updateAdam (noweimie)}
      
    </div>
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
      <div>
        {updateTimeRul3r(nameOne)}
      </div>
      <div>Dawid Bieniaszewski</div>
      <div>Karolina Sandomierz</div>
      <div>
        {updateAdam(imie)}<br/>

      </div>
      <div id="Bieniaszewski">
        <br/>
        {updatespace(nametwo)}
        {updateTimeRul3r(nametwo)}
        {updatespace(nametwo)}
        {updateAdam(nameinf)}

        <UpdateName2 name = {nametwo}/>
        <br/> <br/>
        
      </div>

      <div>Siemanko, witam w mojej kuchni</div>
      <div>Toster w wannie, niemożliwe</div>
    </div>
  );
}

export default App;
