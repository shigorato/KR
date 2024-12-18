export class Applicant {
    constructor(fullname, email, phone, faculty) {
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.faculty = faculty;
    }
}

export const applicants = []; 


applicants.push(new Applicant("Иванов Иван Иванович", "ivan@example.com", "+79123456789", "Экономический"));
