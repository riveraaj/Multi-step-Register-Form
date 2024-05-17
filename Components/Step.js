export function Step(props){

    const {step} = props,
        $steps = document.createElement('article');

    //Step Style
    $steps.classList.add('step');

    let template = `
        <p class="tab-text">Step ${step} of 3</p>
        <section class="step-container">
            <div class="step-container-items"></div>
            <div class="step-container-items"></div>
            <div class="step-container-items"></div>
        </section>
    `;

    $steps.innerHTML = template;

    //Select all the step elements
    const $stepItems = $steps.querySelectorAll('.step-container-items');

    //Apply the 'is-active' class to the corresponding elements
    $stepItems.forEach((el, index) => {
        if (index < step) el.classList.add('pass');    
        if ((index + 1) == step) el.classList.add('is-active');        
    });

    return $steps;
}