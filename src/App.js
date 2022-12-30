import logo from "./logo.svg";
import "./App.css";

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
        {nametwo}
      </div>
      <div>Siemanko, witam w mojej kuchni</div>
      <div>Toster w wannie, niemożliwe</div>
    </div>
  );
}

export default App;
