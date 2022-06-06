//object literal upgrades

const first='snickers';
const last='bos';
const age=2;
const breed='King Charles Cav';
const dog={
    firstName:first,
    last,
    age,
    breed,
    pals:['Hugo','Sunny']
}

const modal={
    create(selector){

    },
    open(content){

    },
    close(goodbye){

    }
};

function invertColor(color){
    return '#'+('000000'+(0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6); // tạo màu tương phản
}

const key='pocketColor';
const value='#000000';
const tShirt={
    [key]:value,
    [`${key}Opposite`]:invertColor(value)
}

console.log(tShirt);

const keys=['size','color','weight'];
const values=['medium','red',100];
const shirt={
    [key.shirt()]:value.shirt(),
}

