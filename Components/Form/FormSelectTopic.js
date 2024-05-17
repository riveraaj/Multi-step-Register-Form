export function FormSelectTopic(){
    
    return `
    <section class="register__form__section">
        <input id="radio-one" type="checkbox" name="topic" value="Software Development">
        <label class="body-text" for="radio-one">Software Development</label>
    </section>
    <section class="register__form__section">
        <input id="radio-two" type="checkbox" name="topic" value="User Experience" checked>
        <label class="body-text" for="radio-two">User Experience</label>
    </section>
    <section class="register__form__section">
        <input id="radio-three" type="checkbox" name="topic" value="Graphic Design">
        <label class="body-text" for="radio-three">Graphic Design</label>
    </section>
    `;
}