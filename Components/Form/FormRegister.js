export function FormRegister(){

    
    return `
    <section class="register__form__section">
        <label class="small-text" for="name">Name</label>
        <input type="text" name="name" placeholder="enter your name" required>
    </section>

    <section class="register__form__section">
        <label class="small-text" for="name">Email</label>
        <input type="email" name="email" placeholder="example@gmail.com" required>
    </section>
    `;
}