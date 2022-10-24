
//DOM OBJECTS
const card = document.querySelector("card");
const pokeId = document.querySelector(".id");
const pokeImg = document.querySelector("img");
const pokeName = document.querySelector(".name");
const pokeTypeOne = document.querySelector(".typeOne");
const pokeTypeTwo = document.querySelector(".typeTwo");
const button = document.querySelector(".button");


const TYPES = [
    'normal', 'fighting', 'flying',
    'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel',
    'fire', 'water', 'grass',
    'electric', 'psychic', 'ice',
    'dragon', 'dark', 'fairy'
  ];


const url = " https://pokeapi.co/api/v2/pokemon/";


let getPokeData  = () =>{
    let id  = Math.floor(Math.random()*151) + 1;
    const finalUrl = url + id;
    
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
        generateCard(data);
        
    });
   

};

let generateCard = (data) =>{

    const dataFirstType = data.types[0];
    const dataSecondType = data.types[1];
    resetScreen();

    pokeTypeOne.textContent = dataFirstType.type.name;
    pokeTypeOne.classList.add(dataFirstType.type.name);
    pokeId.classList.add(dataFirstType.type.name);
    

    if(dataSecondType){
        pokeTypeTwo.style.display = "block";
        pokeTypeTwo.textContent = dataSecondType.type.name;
        pokeTypeTwo.classList.add(dataSecondType.type.name);

    }else{
        pokeTypeTwo.style.display = "none";
    }


   
    pokeName.textContent = data.name[0].toUpperCase() + data.name.slice(1);
    pokeId.textContent = "#" + data.id;
    pokeImg.src = data.sprites.other.dream_world.front_default; 
};

const resetScreen = () => {
    for (const type of TYPES) {
      pokeTypeOne.classList.remove(type);
      pokeTypeTwo.classList.remove(type);
      pokeId.classList.remove(type);
    }
  };

getPokeData();
button.addEventListener("click", getPokeData);