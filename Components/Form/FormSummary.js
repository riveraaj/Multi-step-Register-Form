export function FormSummary(props){

    const {name, email, topics} = props,
        topicsList = topics.replaceAll('"', "").split(',') || "";

    let topicsListTags = [];
    
    //Generate the content of the list of topics
    if(topics !== null){
        topicsListTags.push(topicsList.map(topic => `<li>${topic}</li>`).join(''))
    }

    return `
        <section class="register__form__section body-text">
            <p>Name: <span>${name}</span></p>
            <p>Email: <span>${email}</span></p>
        </section>

        <section class="register__form__section body-text">
            <span>Topics:</span>
            <ul>
                ${topicsListTags}
            </ul>
        </section>
    `;
}