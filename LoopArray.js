// Add the Houses to the array
var houses = [
    {name: "Targaryen", motto: "Fire and Blood"},
    {name: "Stark",     motto: "Winter is Coming"},
    {name: "Bolton",    motto: "Our Blades Are Sharp"},
    {name: "Greyjoy",   motto: "We Do Not Sow"},
    {name: "Tully",     motto: "Family, Duty, Honor"},
    {name: "Arryn",     motto: "As High as Honor"},
    {name: "Lannister", motto: "Hear Me Roar!"},
    {name: "Tyrell",    motto: "Growing Strong"},
    {name: "Baratheon", motto: "Ours is the Fury"},
    {name: "Martell",   motto: "Unbowed, Unbent, Unbroken"}
  ];

  var targaryen = {name: "Targaryen", motto: "Fire and Blood"};
// Implement the function
function motto(name) {
// ES5 approach:
    for (let i = 0; i < houses.length; i++)  {
        if(houses[i].name == name)
        {
          return houses[i].motto;
        }
      }
      
      return '';
    
}
// ES6 approach:
// const motto = (name) => {
  
//     const targetHouse = houses.find((target)=> {
//         return target.name === name
//     })
    
//     if(targetHouse){
//         return targetHouse.motto   
//     }else {
//         return ''
//     }
// }



// another approach

// function motto(name) {
//     return houses.filter(function(house){return house.name === name}).map(function(house) { return house.motto}).join();
//   }


console.log(motto('Greyjoy'))