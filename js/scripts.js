
function Pizza(toppings,size,crust) {
  this.crust = crust;
  this.toppings = toppings;
  this.size = size;
  this.pizzaPrice = [];
  this.pizzaDetails = [];
};


Pizza.prototype.createPizza = function() {
  const crust = document.getElementById("pizza-crust").value;
  const size = document.getElementById("pizza-size").value;
  const toppings = Array.from(document.querySelectorAll('input[name="pizza-topping"]:checked')).map(checkbox => checkbox.value);
  console.log(crust, size, toppings);
  const pizza = new Pizza(crust,size,toppings);
  console.log(pizza);
};

Pizza.prototype.submitForm = function(event) {
  event.preventDefault();
  this.createPizza();
};

window.addEventListener("DOMContentLoaded", function() {
  button = document.getElementById("button");
  button.addEventListener("click",Pizza.prototype.submitForm.bind(new Pizza()));
}); 

