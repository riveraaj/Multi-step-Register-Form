import { Card } from "./Components/Card.js";
import { Step } from "./Components/Step.js";

export default function App(){
    const $root = document.getElementById('root');
    
    let step = localStorage.getItem("Step"); //Get Step

    $root.appendChild(Card());
    $root.appendChild(Step({step}));
}