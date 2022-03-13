//the ...spread operator
const featured = ["Deep Dish", "Peperono", "Hawaiian"];
const specialty = ["Meetzza", "Spicimama", "Magherita"];

const pizzas = [...featured, "veg", ...specialty];
const fridayPizzas = pizzas;

const deepDish = {
  pizzaName: "Deep Dish",
  size: "Medium",
  ingredients: ["Marinara", "Intalian Sausage", "Dough", "Cheese"],
};

// excise spread
const heading = document.querySelector("p");
heading.innerHTML = sparanWrap(heading.textContent);

function sparanWrap(word) {
  return [...word].map((letter) => `<span>${letter}</span>`).join("");
}

// excise

const people = Array.from(document.querySelectorAll(".people p"));
const names = people.map((person) => person.textContent);

//
const shopList = ["Milk", "flower", ...deepDish.ingredients, "vegetable"];

//
const comments = [
  { id: 25123, text: "Lorem ipsum dolor sit amet." },
  { id: 23947, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam." },
  {
    id: 75162,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut quidem facilis?",
  },
  { id: 92865, text: "Lorem ipsum dolor sit amet consectetur adipisicing." },
  { id: 23450, text: "Lorem ipsum dolor sit amet asd adipisicing." },
];
const id = 23947;
const commentIndex = comments.findIndex((comment) => comment.id === id);
const newComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];

// spread in to a function

const inventors = ["Einstein", "Newton", "Galileo"];
const newInventors = ["Musk", "Jobs"];
inventors.push(...newInventors);

//
const name = ["wes", "box"];

function sayHi(first, last) {
  // alert(`hey there ${first} ${last}`)
}
sayHi(...name);

// the  ...Rest param
function convertCurrency(rate,tip,tax, ...amounts) {
  return amounts.map((amount) => amount * rate);
}
convertCurrency(23.02, 12, 5, 21, 4, 67);


const runner=['wes box',123,5.5,5,32,53,23];

const team=['wes','kain','seena','lux','kelly'];
const [captain, assistant,...player]=team; 