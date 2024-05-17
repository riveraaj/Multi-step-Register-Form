import { FormRegister } from "./FormRegister.js";
import { FormSelectTopic } from "./FormSelectTopic.js";
import { FormSummary } from "./FormSummary.js";

export function Form(props){

    const {title} = props,
        $form = document.createElement('form');

    const jsConfetti = new JSConfetti()


    $form.classList.add('register__form'); //Form Style

    const HEADING = `<h2 class="heading">${title}</h2>`,
        BUTTON = '<button class="small-text" type="submit">Continue</button>',
        STEP = localStorage.getItem("Step"),
        TEMPLATE = (STEP === "1") ? FormRegister() 
            : (STEP === "2") ? FormSelectTopic() 
            : FormSummary({
                name: localStorage.getItem("Name"),
                email: localStorage.getItem("Email"),
                topics: JSON.stringify(localStorage.getItem("Topics")),
            });

    document.addEventListener("submit", (e) =>{
        if(!e.target === $form) return;

        e.preventDefault(); 

        if(STEP === "1"){
            //Get values from form
            let name = e.target.name.value,
            email = e.target.email.value;

            //Clear possible variables above
            localStorage.removeItem("Name");
            localStorage.removeItem("Email");

            //Saving data in LocalStorage
            localStorage.setItem("Name",name);
            localStorage.setItem("Email",email);

            localStorage.setItem("Step", 2); //Increment Step
        }else if(STEP === "2") {   
            //Get values from form
            let topic = e.target.topic,
                topics = Array.from(topic)
                        .filter(topicCheckbox => topicCheckbox.checked)
                        .map(topicCheckbox => topicCheckbox.value);

            localStorage.removeItem("Topics"); //Clear possible variables above
            localStorage.setItem("Topics", topics); //Saving data in LocalStorage
            localStorage.setItem("Step", 3); //Increment Step
        }else{
            localStorage.clear();
            localStorage.setItem("Step", 1); //Default Step

            jsConfetti.addConfetti();
            
            setTimeout(() => {
                location.reload();
            }, 4000);

            return;
        }
        location.reload();
    });

    //Add Components
    $form.innerHTML += HEADING;
    $form.innerHTML += TEMPLATE; 
    $form.innerHTML += BUTTON;

    return $form;
}