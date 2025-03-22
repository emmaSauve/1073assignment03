var orderBtn = document.getElementById("orderBtn");
var myStudentId = document.getElementById("myStudentId"); // variable for the student id
var orderInfo = document.getElementById("orderInfo"); // variable to output the order summary text
var form = document.getElementById("seasideForm"); // variable for the form id

class Pizza{ // pizza class

    numberOfPizzas;
    size;
    crust;
    toppings;
    sauce;
    cheese;
    seasonings;
    firstName;
    lastName;
    addresss;
    phoneNumber;
    deliveryOption;

    constructor(numberOfPizzas, size, crust, toppings, sauce, cheese, seasonings, firstName, lastName, address, phoneNumber, deliveryOption) { //pizza class constructor
        this.numberOfPizzas = numberOfPizzas;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.sauce = sauce;
        this.cheese = cheese;
        this.seasonings = seasonings;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.deliveryOption = deliveryOption;

    }

    

    orderSummary(){ // order summary string that describes the pizza that the user ordered
        return `Thank you for placing your order ${this.firstName} ${this.lastName}. You ordered ${this.numberOfPizzas} ${this.size} pizza(s). The crust is ${this.crust}, the toppings are ${this.toppings}, the sauce is ${this.sauce}, the cheese is ${this.cheese}, and the seasonings are ${this.seasonings}. The pizza will arrive at your address: ${this.address} in 20 minutes because you chose ${this.deliveryOption}. We'll call you at ${this.phoneNumber} when its ready`;
    }


}

function getFormInfo(event) {
    // variables to store the values input from the form
    let numberOfPizzas = document.getElementById("numberOfPizza").value;
    let size = document.getElementById("size").value;
    let crust = document.getElementById("crust").value;
    let sauce = document.getElementById("sauce").value;
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let address = document.getElementById("address").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let delivery = document.getElementById("delivery").value;

    let toppings = document.querySelectorAll('input[name="topping[]"]:checked'); // grab all toppings that are checked 
    const toppingsArray = []; // array to store them
    for (let i = 0; i < toppings.length; i++) { // loop for the length of the toppings that were grabbed 
        toppingsArray.push(toppings[i].value); // push the toppings to the toppingsArray
    } 

    let cheese = document.querySelectorAll('input[name="cheese[]"]:checked');
    const cheeseArray = [];
    for (let i = 0; i < cheese.length; i++) {
        cheeseArray.push(cheese[i].value);
    }

    let seasonings = document.querySelectorAll('input[name="seasoning[]"]:checked');
    const seasoningArray = [];
    for (let i = 0; i < seasonings.length; i++) {
        seasoningArray.push(seasonings[i].value);
    }

    var pizza = new Pizza( // create a new pizza object with the variables
        numberOfPizzas,
        size,
        crust,
        toppingsArray,
        sauce,
        cheeseArray,
        seasoningArray,
        firstName,
        lastName,
        address,
        phoneNumber,
        delivery
    );

    orderInfo.innerHTML = pizza.orderSummary(); // use the orderSummary function to output the summary of the order to the user in the orderInfo p tag

    event.preventDefault();
}

function showStudentId(){ // function to display student id
    myStudentId.innerHTML = "1261276";
}

form.addEventListener("submit", getFormInfo);
form.addEventListener("submit", showStudentId);

