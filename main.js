const name = `Lukasz` ;
const age = 25;

console.log (`Mam na imie ${name} i mam ${age} lat`)

const articleHeading = document.querySelector (`.article--heading--js`);

articleHeading.innerHTML = `jestem kim?`;


function calculation(myNuber) {
   console.log (`wychodzi ${myNuber}`)
   return myNuber*7;
 
};
myBubmer = calculation(2);

console.log(myBubmer);


function wite(name, age) {
   console.log (`Mam na imie ${name} i mam ${age} lat`)

};
wite(name, age);

const witear = (name, age) => console.log (`Mam na imie ${name} i mam ${age} lat`);

witear(name, age);

witear(name, age);
