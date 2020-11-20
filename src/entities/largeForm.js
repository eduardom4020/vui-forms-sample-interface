export class LargeForm {
    constructor({
        name,
        phone,
        lastName,
        email,
        zipCode,
        instagram,
        github,
        identityNumber,
        taxId,
        gender,
        age,
        job,
        company,
        state,
        city,
        address,
        number,
        neighborhood,
        complement
    }) {
        this.name = name;
        this.phone = phone;
        this.lastName = lastName;
        this.email = email;
        this.zipCode = zipCode;
        this.instagram = instagram;
        this.github = github;
        this.identityNumber = identityNumber;
        this.taxId = taxId;
        this.gender = gender;
        this.age = age;
        this.job = job;
        this.company = company;
        this.state = state;
        this.city = city;
        this.address = address;
        this.number = number;
        this.neighborhood = neighborhood;
        this.complement = complement;
    }

    json() {
        return {
            name: this.name,
            phone: this.phone,
            lastName: this.lastName,
            email: this.email,
            zipCode: this.zipCode,
            instagram: this.instagram,
            github: this.github,
            identityNumber: this.identityNumber,
            taxId: this.taxId,
            gender: this.gender,
            age: this.age,
            job: this.job,
            company: this.company,
            state: this.state,
            city: this.city,
            address: this.address,
            number: this.number,
            neighborhood: this.neighborhood,
            complement: this.complement
        };
    }
}