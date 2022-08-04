export class Friend {
    language: string;
    firstName : string;
    lastName : string;
    email : string;
    phone: number;
    message : string;

  constructor(language:string, firstName:string, lastName:string, email:string, phone:number, message:string ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.language = language;
    this.message = message;
  }
}
