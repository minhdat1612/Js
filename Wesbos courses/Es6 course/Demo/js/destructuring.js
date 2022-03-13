// const setting={width:800,color:'red'  };
// const  {width=400 , height=500, color='blue', fontsize='25px'} =setting;
// const {w:width=400 , h:height=500}={w:800};

//destructuring swap variable
var inRing = "Hulk Hogan";
var onSide = "The Rock ";
[inRing, onSide] = [onSide, inRing];

//multiple returns and name defaults
function convertCurrency(amount) {
  const converted = {
    USD: amount * 0.76,
    GPD: amount * 0.53,
    AUD: amount * 1.01,
    MEX: amount * 13.0,
  };
  return converted;
}
const hundo = convertCurrency(100);
console.log(hundo);
const { USD, MEX } = convertCurrency(23);
console.log(USD, MEX);

function tipCalc({ total=120, tip = 0.15, tax = 0.1 }) {
  return total + tip * total + tax * total;
}
var bill = tipCalc({total:125});
console.log(bill);
