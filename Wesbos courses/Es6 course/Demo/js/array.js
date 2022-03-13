// Array.from(), Array.of()

const people = document.querySelectorAll(".people p");
// const people= Array.from(document.querySelectorAll('.people p'));
// const name=people.map(person=>person.textContent);
const personArray = Array.from(people, (person) => {
  return person.textContent;
});
console.log(personArray);

function sumAll() {
  const num = Array.from(arguments); //an array created by a list transmitted
  return num.reduce((prev, next) => prev + next, 0);
}

sumAll(2, 32, 12, 34, 2123);

const arrCreated = Array.of(12, 32, 15, 92, 35); //an array created by values transmitted

//Array.find(), Array.findIndex()

const posts = [
  {
    code: "ssksm",
    caption:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt eligendi exercitationem magni!",
    like: 17,
    id: "232dsda1",
  },
  {
    code: "ksspqsk",
    caption:
      "Lorem ipsum dolor sit, amet  adipisicing elit. Incidunt eligendi exercitationem magni!",
    like: 212,
    id: "42132sadsa",
  },
  {
    code: "owlsmcl",
    caption:
      "Lorem ipsum  sit, amet consectetur adipisicing elit. Incidunt eligendi exercitationem magni!",
    like: 17,
    id: "s2213ccsa",
  },
];
const code = "ksspqsk";
const post = posts.find((post) => post.code === code); //return value of item
const postIndex = posts.findIndex((post) => post.code === code); // return index of item

// Array.some(), Array.every()

const ages = [12, 8, 18, 16, 24, 32, 36, 75, 55];

const adultPresent = ages.some((age) => age >= 18);// return true  because there is at least one case meet the condition
const allOldEnough = ages.every((age) => age >= 18);//return false because there is not all of case meet the conditon
