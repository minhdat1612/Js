class car {
    constructor(make, colour) {
        this.make = make;
        this.colour = colour;
    }
}

const beemer = new car('bmw', 'red');
const subie = new car('subaru', 'white');
car.prototype.sumarize = function () {
    return `this car is a ${this.make} in the colour ${this.colour}`;
}

const orderChildren = () => {
    const children = Array.from(arguments);
    return children.map((child, i) => {
        return `${child} was child #${i + 1}`;
    });
    console.log(arguments);
}