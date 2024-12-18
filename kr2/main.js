import { ApplicantsPresenter } from './presenter/board-presenter.js';
import { Applicant } from './src/model/model.js';

const container = document.querySelector('.container');
const applicantsPresenter = new ApplicantsPresenter(container);

const applicantForm = document.getElementById('applicant-form');
applicantForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const faculty = document.getElementById('faculty').value;

    if (fullname && email && phone && faculty) {
        const newApplicant = new Applicant(fullname, email, phone, faculty);
        applicantsPresenter.addApplicant(newApplicant);
        applicantForm.reset();
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});