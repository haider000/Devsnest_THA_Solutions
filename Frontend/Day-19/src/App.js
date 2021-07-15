import "./styles.css";
import Card from "./Card";

export default function App() {
  return (
    <div className="container">
      There are 4 counter component instances that each manage their own state.
      <div className="App">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
