import logo from "./logo.svg";
import "./App.css";

let testmetody = "jakieśzdanie";
let testmetody1 = testmetody.toUpperCase();

const updateName = (imie) => {
  const noweimie = imie + " 12345"
  return noweimie
}
  const updateName2 = (nametwo) => {
    const noweimie = nametwo + " Polska Górą!!1!"
    return noweimie
}
function App() {
  const nameOne = "Wiktoria Leśniarek"
  const imie = "Adam"
  const nametwo = "Dawid Bieniaszewski"
  return (
    <div>
      <div>
        {nameOne}
      </div>
      <div>Dawid Bieniaszewski</div>
      <div>Karolina Sandomierz</div>
      <div>
        {imie}
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
