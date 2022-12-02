import './App.css';
import Game from "./presenter/gamePresenter";

export default
function App(props) {
  return (
    <div className="App">
        <Game model ={props.model}/>
    </div>
  );
}

