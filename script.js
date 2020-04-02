let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#Proceed");

let students = [
  {
    profileImage: "https://cdn.glitch.com/bd59dae0-2a8b-4d3b-bb31-ce11e4fbb47f%2Fmayhelly.jpg?v=1585186648454",
    name: "Mayhelly",
    quote: "Be the change you want to see in the world-Gandhi",
    superlative: "BFF"
  },
  {
    profileImage: "https://cdn.glitch.com/bd59dae0-2a8b-4d3b-bb31-ce11e4fbb47f%2Fnayeli.jpg?v=1585186708702",
    name: "Nayeli",
    quote: "sometimes you will never know the value of a moment until it becomes a memory",
    superlative: "Talented"
  },
  {
     profileImage: "https://cdn.glitch.com/bd59dae0-2a8b-4d3b-bb31-ce11e4fbb47f%2Fgreg.jpg?v=1585186778908",
    name: "Greg",
    quote: "Remember the name Big G",
    superlative: "Money man"
  },
  {
    profileImage: "https://cdn.glitch.com/bd59dae0-2a8b-4d3b-bb31-ce11e4fbb47f%2Ffriend.jpg?v=1585186804120",
    name: "Dashawn",
    quote: "I dont wish, I make things into a reality",
    superlative: "Nonchalant"
  },
  {
    profileImage: "https://cdn.glitch.com/bd59dae0-2a8b-4d3b-bb31-ce11e4fbb47f%2Fjames.jpg?v=1585186857520",
    name: "James",
    quote: "I dont rest in the middle, I rest in the end-Kobe",
    superlative: "Determined"
  },
  {
    profileImage: "https://cdn.glitch.com/bd59dae0-2a8b-4d3b-bb31-ce11e4fbb47f%2Fmiguel.jpg?v=1585186930484",
    name: "Miguel aka Chapoo",
    quote: "Why are you the way you are",
    superlative: "Loving"
  },
  {
    profileImage: "https://cdn.glitch.com/bd59dae0-2a8b-4d3b-bb31-ce11e4fbb47f%2Fvianka.jpg?v=1585186956206",
    name: "Vianka",
    quote: "Don't ever let people get into your head and make sure you try your best and be the best you can be",
    superlative: "Blunt"
  },
  {
     profileImage: "https://cdn.glitch.com/bd59dae0-2a8b-4d3b-bb31-ce11e4fbb47f%2Fandrew.jpg?v=1585186983329",
    name: "Andrew",
    quote: "BUENOO",
    superlative: "Annoying"
   }
   
]



let count = 0;

 document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML= students[count].quote;
  document.querySelector("#superlative").innerHTML=  students[count].superlative;
  let lastStudent = students.length -1
  

nextButton.addEventListener("click", () => {
  console.log('Proceed');
  count ++;
  console.log(count)
  if(count > lastStudent){
   count=0
  }
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML= students[count].name;
  document.querySelector("#quote").innerHTML= students[count].quote;
  document.querySelector("#superlative").innerHTML= students[count].superlative;
});

backButton.addEventListener("click", () => {
  console.log('back');
  count --;
  console.log(count)
  if(count<0){
    count=lastStudent 
  }
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML= students[count].name;
  document.querySelector("#quote").innerHTML= students[count].quote;
  document.querySelector("#superlative").innerHTML= students[count].superlative;
});
