import { AbstractComponent } from "../framework/view/abstract-component.js";

function createApplicantTemplate(applicant) {
    return `
        <div class="applicant-item">
            <p><strong>ФИО:</strong> ${applicant.fullname}</p>
            <p><strong>Email:</strong> ${applicant.email}</p>
            <p><strong>Телефон:</strong> ${applicant.phone}</p>
            <p><strong>Факультет:</strong> ${applicant.faculty}</p>
            <hr>
        </div>
    `;
}

function ApplicantsView(applicants) {
    return `
        <div id="applicants-container">
            ${applicants.map(createApplicantTemplate).join('')}
        </div>
    `;
}

export default class ApplicantsViewComponent extends AbstractComponent {
    constructor(applicants) {
        super();
        this._applicants = applicants;
    }

    get template() {
        return ApplicantsView(this._applicants);
    }

    update(applicants) {
        this._applicants = applicants;
        this.removeElement();
        const parent = document.getElementById('applicants-list');
        parent.querySelector('#applicants-container').replaceWith(this.element);
    }
}