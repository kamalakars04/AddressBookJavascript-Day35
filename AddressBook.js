// Create a contact class
class ContactDetails
{
    // Creating parametrized constructor
    constructor(...params)
    {
        this.firstName= params[0];
        this.lastName= params[1];
        this.address= params[2];
        this.city= params[3];
        this.state= params[4];
        this.zip= params[5];
        this.phoneNumber= params[6];
        this.email= params[7];
    }
    // getter and setter for first name
    get firstName(){return this._firstName;}
    set firstName(firstName)
    {
        let nameRegex = RegExp("^[A-Z][A-Za-z]{2,}$");
        if(nameRegex.test(firstName))
            this._firstName= firstName;
        else
        throw "Invalid FirstName format";
    }

    // getter and setter for last name
    get lastName(){return this._lastName;}
    set lastName(lastName)
    {
        let nameRegex = RegExp("^[A-Z][A-Za-z]{2,}$");
        if(nameRegex.test(lastName))
            this._lastName= lastName;
        else
        throw "Invalid LastName format";
        
    }

    // getter and setter for address
    get address(){return this._address;}
    set address(address)
    {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if(addressRegex.test(address))
            this._address= address;
        else
        throw "Invalid address format";
    }

    // getter and setter for city
    get city(){return this._city;}
    set city(city)
    {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if(cityRegex.test(city))
            this._city= city;
        else
        throw "Invalid city format";
    }

    // getter and setter for state
    get state(){return this._state;}
    set state(state)
    {
        let stateRegex = RegExp("^[A-Za-z]{4,}$");
        if(stateRegex.test(state))
            this._state= state;
        else
        throw "Invalid state format";
    }

    // getter and setter for zip
    get zip(){return this._zip;}
    set zip(zip)
    {
        let zipRegex = RegExp("^[0-9]{3}[ ]?[0-9]{3}$");
        if(zipRegex.test(zip))
            this._zip= zip;
        else
        throw "Invalid zip format";
    }

    // getter and setter for phoneNumber
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        let phoneRegex = RegExp("^([+][0-9]{2})?[0-9]{10}$");
        if(phoneRegex.test(phoneNumber))
            this._phoneNumber= phoneNumber;
        else
        throw "Invalid Phone Number format";
    }

    // getter and setter for email
    get email(){return this._email;}
    set email(email)
    {
        let emailRegex = RegExp("^[a-zA-Z]{3,}([.+_-][0-9A-Za-z]+)*[@][0-9a-zA-Z]{1,}[.][a-zA-Z0-9]{2,3}([.][0-9a-zA-Z]{2})?");
        if(emailRegex.test(email))
            this._email= email;
        else
        throw "Invalid email";
    }

    // defining method toString()
    toString()
    {
        return "first Name: "+this.firstName+", last Name: "+this.lastName+"\nAddress: "+ this.address+", City: "+ this.city+", State: "+this.state+"\nZip: "+this.zip+", Phone Number: "+this.phoneNumber+", email: "+this.email; 
    }
    
}

// Creating object for class Address book with parameters for constructor
try
{
    let contact= new ContactDetails("Kamalakar","Rao","kadapattoor","pala","Kottayam","686 574","+918919810751","kamalakar@gmail.com");
    console.log(contact.toString());
}
catch(e)
{
    console.log(e);
}
