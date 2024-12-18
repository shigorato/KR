import { AbstractComponent } from "../framework/view/abstract-component.js";

function FormView() {
    return `
        <div class="registration-form">
            <h2>Регистрация абитуриента</h2>
            <form id="applicant-form">
                <input type="text" id="fullname" placeholder="ФИО">
                <input type="email" id="email" placeholder="Email">
                <input type="tel" id="phone" placeholder="Телефон">
                <select id="faculty" required>
                    <option value="">Выберите факультет</option>
                    <option value="IT">Информационных технологий</option>
                    <option value="ECONOMICS">Экономический</option>
                    <option value="MEDICINE">Медицинский</option>
                    <option value="HUMANITIES">Гуманитарный</option>
                </select>
                <button type="submit">Зарегистрировать</button>
            </form>
        </div>
    `;
}

export default class FormViewComponent extends AbstractComponent {
    constructor() {
        super();
    }

    get template() {
        return FormView();
    }
}