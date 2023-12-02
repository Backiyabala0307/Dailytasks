//the class person
class person {

    constructor(name, mail_id) {
        this.name = name;
        this.mail_id = mail_id;

    }
    IDproof() {
        this.Aadhaar_number = "2564 6754 7866";
        this.voter_Id = "TNEC2345";
        this.PAN_number = "GHMP3452";

    }
    education() {
        this.gratuation = "BE-CSE";
        this.institution_name = "CMS College of Engineering";
        this.percentage = 74;

    }
    job_details() {
        this.year = 3.5;
        this.field = "Software Developer";
        this.current_CTC = 40000;
        console.log(`job details:
        ${this.year}
        ${this.field}
        ${this.current_CTC}`);
        return this.field;
    }
    skills() {
        this.technical_skills = "java csript,html,css";
        this.non_technical_skills = "tennis,tennicoit";
    }
}
person.prototype.personalinfo = function () {
    this.address = "1-65H,Ganesapuram,APM,Dindigul";
    this.father_name = "bala";
    this.gender = "female";
    this.maritial_status = "married";
}

person.prototype.bank_details = function () {
    this.name = "IOB";
    this.account_number = "34526434";

    console.log(`bank_details:
      ${this.name}
      ${this.account_number}`);
}

person.prototype.age = 50;

let person1 = new person("backiya", "backiyabala0307@gmail.com");
console.log(person1.age);