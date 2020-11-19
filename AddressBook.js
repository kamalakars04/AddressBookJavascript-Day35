// Create a contact class
class ContactDetails
{
    // Creating parametrized constructor
    constructor(...params)
    {
        if(CheckDuplicates(params[0],params[1]) != -1)
        {
            console.log("Contact already exists");
            return;
        }
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
        let addressRegex = RegExp("^(?=.*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z])[A-Za-z ]*$");
        if(addressRegex.test(address))
            this._address= address;
        else
        throw "Invalid address format";
    }

    // getter and setter for city
    get city(){return this._city;}
    set city(city)
    {
        let cityRegex = RegExp("^(?=.*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z])[A-Za-z ]*$");
        if(cityRegex.test(city))
            this._city= city;
        else
        throw "Invalid city format";
    }

    // getter and setter for state
    get state(){return this._state;}
    set state(state)
    {
        let stateRegex = RegExp("^(?=.*[A-Za-z].*[A-Za-z].*[A-Za-z].*[A-Za-z])[A-Za-z ]*$");
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
        return "\nfirst Name: "+this.firstName+", last Name: "+this.lastName+"\nAddress: "+ this.address+", City: "+ this.city+", State: "+this.state+"\nZip: "+this.zip+", Phone Number: "+this.phoneNumber+", email: "+this.email; 
    }
    
}

// UC 3 Creating a new addressbook array and adding contacts to it
let contact;
let addressBook = new Array();
try
{
    contact= new ContactDetails("Kamalakar","Rao","kadapattoor","pala","kerala","686 574","+918919810751","kamalakar@gmail.com");
    addressBook.push(contact);
    addressBook.push(new ContactDetails("Mukesh","Ravi","this street","parvatipuram","Andhra","123456","8974569871","Mukesh@gmail.com"));
    addressBook.push(new ContactDetails("Vishal","Garg","that street","hisar","Haryana","741258","7896321451","vishal@gmail.com"));
    addressBook.push(new ContactDetails("Sahana","Gurunathan","street","Noida","Uttar Pradesh","456544","8906123456","sahana@gmail.com"));
    addressBook.push(new ContactDetails("Charan","Rakam","nagar","Karimnagar","Telangana","123213","7996541252","charan@gmail.com"));
    addressBook.push(new ContactDetails("Prasad","Kamakshi","Jp nagar","Nellore","Andhra","486213","9490476083","prasad@gmail.com"));
    addressBook.push(new ContactDetails("Ramana","Kumar","Gandhi street","Warangal","Telangana","789632","9600577672","ramana@gmail.com"));
    addressBook.forEach(p => console.log(p.toString()));
}
catch(e)
{
    console.log(e);
}

// UC 4 Edit existing contact
function EditContact(FirstName, LastName,field,newValue)
{
    try
    {
        let searchedContact = addressBook.filter(p => p.firstName == FirstName && p.lastName == LastName)[0];
        switch(field)
        {
            case "city":
                searchedContact.city = newValue;
                break;
        }
        console.log(searchedContact.toString());
    }
    catch
    {
        console.log("Contact not found");
    }
}
EditContact("Ramana","Kumar","city","Hyderabad");  

// UC 5 Delete existing contact
function DeleteContact(FirstName, LastName)
{
    searchedContact = addressBook.filter(p => p.firstName == FirstName && p.lastName == LastName)[0];
    var index = addressBook.indexOf(searchedContact);
    if (index != -1)
    {
        addressBook.splice(index, 1);
    }
    else
        console.log("Contact not found");
}
DeleteContact("Ramana","Kumar");
addressBook.forEach(p => console.log(p.toString()));

// UC 6 Count number of contacts
function GetCount()
{
    let count = addressBook.reduce(((count,contact) => {return count+1;}),0);
    console.log(count);
}
GetCount();

// UC 7 Check For Duplicates
function CheckDuplicates(FirstName,LastName)
{
    searchedContact = addressBook.some(p => p.firstName == FirstName && p.lastName == LastName)[0];
    var index = addressBook.indexOf(searchedContact);
    return index;
}

// Add new contact method
addressBook.push(new ContactDetails("Mukesh","Kumar","this street","parvatipuram","Andhra","123456","8974569871","Mukesh@gmail.com"));
addressBook.forEach(p => console.log(p.toString()));

// UC 8 Search Person In city
function SearchPersonInCity(FirstName,LastName,City)
{
    let filteredArray = addressBook.filter(p => p.firstName == FirstName && p.lastName == LastName && p.city == City);
    console.log("\n\nSearched person in city "+ City);
    filteredArray.forEach(p => console.log(p.toString()));
}
SearchPersonInCity("Mukesh","Kumar","parvatipuram");

// UC 8 Search Person In city
function SearchPersonInState(FirstName,LastName,State)
{
    let filteredArray = addressBook.filter(p => p.firstName == FirstName && p.lastName == LastName && p.state == State);
    console.log("\n\nSearched person in state "+ State);
    filteredArray.forEach(p => console.log(p.toString()));
}
SearchPersonInCity("Mukesh","Kumar","Andhra");


// UC 9 view Persons In city
function ViewPersonsInCity(City)
{
    let filteredArray = addressBook.filter(p => p.city == City);
    console.log("\n\viewed persons in city "+ City);
    filteredArray.forEach(p => console.log(p.toString()));
}
ViewPersonsInCity("pala");

// UC 9 view Persons In city
function ViewPersonsInState(State)
{
    let filteredArray = addressBook.filter(p => p.state == State);
    console.log("\n\viewed persons in city "+ State);
    filteredArray.forEach(p => console.log(p.toString()));
}
ViewPersonsInCity("Andhra");
