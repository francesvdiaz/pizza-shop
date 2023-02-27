function Pizza(size, crust) {
  this.crust = crust;
  this.toppings = [];
  this.size = size;
};

Pizza.prototype.createPizza = function() {
  const crust = document.getElementById("pizza-crust").value;
  const size = document.getElementById("pizza-size").value;
  const toppings = Array.from(document.querySelectorAll('input[name="pizza-topping"]:checked')).map(checkbox => checkbox.value);
  
  this.toppings = toppings;
  this.crust = crust;
  this.size = size;

  this.calculateCost();
};

Pizza.prototype.calculateCost = function() {
  let price = 0;
  this.toppings.forEach(function(topping) {
    switch(topping) {
      case "pepperoni":
        price += 1.5;
        break;
      case "chicken":
        price += 2;
        break;
      case "raspberries":
        price += 1.75;
        break;
      case "spinach":
        price += 1.25;
        break;
      case "hemp-seeds":
        price += 1.5;
        break;
      case "mushrooms":
        price += 1.25;
        break;
      case "artichoke-slices":
        price += 2;
        break;
      default:
        break;  
    };
  });
  switch (this.crust) {
    case "Stuffed Crust":
      price += 4;
      break;
    case "Mal's Special Crust":
      price += 4;  
      break;
  };
  switch (this.size) {
    case "10in":
      price += 10;
      break;
    case "12in":
      price += 12;
      break;
    case "14in":
      price += 14;
      break;
    default:
      break;      
  };
  this.price = price;
};

Pizza.prototype.submitForm = function(event) {
  event.preventDefault();
  this.createPizza();
  const orderDetails = document.createElement("h3");
  orderDetails.innerText = "";
  const output = document.getElementById("order-details");
  output.innerHTML = "";
  const pizzaDiv = document.createElement("div");
  const pizzaDetails = `Crust: ${this.crust}, 
  Size: ${this.size}, 
  Toppings: ${this.toppings.join(", ")}, 
  Price: $${this.price.toFixed(2)}`;
  pizzaDiv.innerText = pizzaDetails;
  pizzaDiv.style.backgroundColor = "#423F35";
  output.appendChild(pizzaDiv);
};

window.addEventListener("DOMContentLoaded", function() {
  const pizza = new Pizza();
  const button = document.getElementById("button");
  button.addEventListener("click", pizza.submitForm.bind(pizza));
});
