## Describe: createPizza();
## Test: It will create a new pizza object
  ### Code: 
  ### const crust
  ### const size
  ### const toppings
  ### const pizza = new Pizza(crust,size,toppings);
  ### console.log(pizza);
  ### Passed?: Yes

Describe: calculateCost();
Test: It will use a switch loop to calculate the cost of the pizza
  Code: 
   let price = 0
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
  this.price = price;
  console.log(price);
  Passed: Yes!