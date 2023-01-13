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
  const updateName2 = (nametwo) => {
    const noweimie = nametwo.slice(3,7) + " Polska Górą!!1!";
    
    return noweimie
}
function App() {
  const nameOne = "Wiktoria Leśniarek"
  const imie = "Adam Borzęda Architektura Informacji"
  const nametwo = "Dawid Bieniaszewski"
  return (
    <div>
      <div>
        {updateTimeRul3r(nameOne)}
      </div>
      <div>Dawid Bieniaszewski</div>
      <div>Karolina Sandomierz</div>
      <div>
        {updateAdam(imie)}
      </div>
      <div>
        {updateName2(nametwo)}
      </div>
      <div>Siemanko, witam w mojej kuchni</div>
      <div>Toster w wannie, niemożliwe</div>
    </div>
  );
}

export default App;
