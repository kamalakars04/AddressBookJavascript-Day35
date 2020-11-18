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
        this._firstName= firstName;
    }

    // getter and setter for last name
    get lastName(){return this._lastName;}
    set lastName(lastName)
    {
        this._lastName= lastName;
    }

    // getter and setter for address
    get address(){return this._address;}
    set address(address)
    {
        this._address= address;
    }

    // getter and setter for city
    get city(){return this._city;}
    set city(city)
    {
        this._city= city;
    }

    // getter and setter for state
    get state(){return this._state;}
    set state(state)
    {
        this._state= state;
    }

    // getter and setter for zip
    get zip(){return this._zip;}
    set zip(zip)
    {
        this._zip= zip;
    }

    // getter and setter for phoneNumber
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        this._phoneNumber= phoneNumber;
    }

    // getter and setter for email
    get email(){return this._email;}
    set email(email)
    {
        this._email= email;
    }

    // defining method toString()
    toString()
    {
        return "first Name: "+this.firstName+", last Name: "+this.lastName+"\nAddress: "+ this.address+", City: "+ this.city+", State: "+this.state+"\nZip: "+this.zip+", Phone Number: "+this.phoneNumber+", email: "+this.email; 
    }
    
}

// Creating object for class Address book with parameters for constructor
let contact= new ContactDetails("Kamalakar","Rao","kadapattoor","pala","Kottayam","686574","8919810751","kamalakar@gmail.com");
console.log(contact.toString());