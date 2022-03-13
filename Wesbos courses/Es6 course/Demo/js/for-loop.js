//  the for loop
const cuts = ["Chuck", "Briket", "Shark", "Short Rib"];
//  for (let i=0; i<cuts.length; i++){
//      console.log(cuts[i]);
//  }
// cuts.forEach((cut) => {
//   console.log(cut);
// });

// for (const cut in cuts) {
//   if (cut === "Shark") {
//     break;
//   }
//   console.log(cut);
// }

// for (const cut of cuts) {
//   if (cut === "Shark") {
//     break;
//   }
//   console.log(cut);
// }

// for (const cut of cuts) {
//   if (cut === "Shark") {
//     continue;
//   }
//   console.log(cut);
// }

//  the for loop in action
for (const [i, cut] of cuts.entries()) {
  //entries return a tring-keyed property [key, value] pairs
  console.log(`${cut} is the ${i + 1} item`);
}

function addUpNumber() {
  let total = 0;
  for (num of arguments) {
    total += num;
  }
  console.log(total);
  return total;
}

addUpNumber(10, 12, 25, 18, 55, 60, 32);

const name='wes bos';
for ( char of name){
    console.log(char);
}

const ps=document.querySelectorAll('p');
console.log(ps);

// for with object
 const apple={
    color:'red',
    size:'medium',
    weight:50,
    sugar:10
 }
 for (const prop in apple){
     var value=apple[prop];
     console.log(prop,value);
 }