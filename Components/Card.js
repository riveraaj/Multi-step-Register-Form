import { Form } from "./Form/Form.js";

export function Card(){
    const $card = document.createElement('article'),
        STEP = localStorage.getItem("Step");

    //Card Style
    $card.classList.add('card');
    
    //Add Components
    switch(STEP){
        case '2': 
            $card.appendChild(Form({title: "Which topics you are interested in?"}));
            break;
        case '3': 
            $card.appendChild(Form({title: "Summary"}));
            break;
        default: 
            $card.appendChild(Form({title: "Register"}));
            break;
    }

    return $card;
}; 