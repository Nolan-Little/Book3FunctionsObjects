const person = [{
    name: "Nolan",
    age: 27,
    hobbies: ["Swing dancing", "coding", "Aoe2"],
    personality: "INFP -A",
    introduceYourself: () => `Hi my name is ${person[0].name} and I am ${person[0].age} years old`
  }, 
  {
    name: "Jenni",
    age: 36,
    hobbies: ["Drawing", "Photography", "Dancing"],
    personality: "INFJ",
    introduceYourself: () => `Hi my name is ${person[1].name} and I am ${person[1].age} years old`
  },
]

console.log("person introduction", person[1].introduceYourself())

const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

const getBiffed = `Hi. My name is ${name}, and I'm ${age} years old. 
They say that makes me a ${generationStereotype}. In ${timeSpan} years 
I'll be ${futureAge}. I guess that means I'll be a ${dadJoke} then. Ha ha!`

console.log("Get biffed", getBiffed);

// 1. Using the object above, console log "Our company's lawyer is Jeff Winger" 
// using dot notation to access 'name'

// 2. Console log "Jeff was hired on 09/22/2010" using bracket notation.

// 3. Add a new key, `vacation_days`, and its value, `20`, to `employee`. 
// Use either dot or bracket notation. Does it matter which one you use? 
// Try both to find out.
// 4. Use the variable above to add a new property to `employee`. 
// Set its value to `false`. 
// Should you use dot or bracket notation?

let eom = "employee_of_the_month";
let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
}

console.log(`Our Company's lawyer is ${employee.name}.`)
console.log(`Jeff was hired on ${employee["hire_date"]}.`)

employee.vacationDays = 20;
employee["like"] = true;

console.log(employee);

employee[eom] = false;

console.log("employee of the month....false" , employee);

// ## Objects' keys can contain values of any type, even functions.

// 1. Add an action that the painter can perform.
// 2. Have her take that action by execucting the method you created.

let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true,
  estimate: function (estHrs){
    let est =estHrs * painter.cost_per_hour
    return `$${est}`
  }
}
// BONUS:
// Add a method that allows us to add new tools for the painter.

painter.addTools = (addTool) => {
  painter.tools.push(addTool);
  console.log(painter);
}

console.log(painter.estimate(6))

painter.addTools("brain");

// Use dot notation to access the value of the key "meaning_of_life" in this object

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);
let meaning = "meaning_of_life"

console.log(hitchhikers_guide.random_facts.ultimate_answer[meaning]);

// Now access it using a variable called "meaning": 

// one way

let hyperbole = ["dev", "JS", "unicorn", "ninja", "rockstar", "a", "am", "I"]
let statement = ''
hyperbole.reverse().forEach((word) => {
  if (word != "dev") {statement += `${word} `
} else if (word === "dev") {
      statement += `${word}. `
    }
});

console.log("first method concat", statement);

// another way?

let reverse = [];
hyperbole.forEach( (word) => reverse.push(word))

let sentence='';
for (let i=0; i < reverse.length; i++){
  if (i + 1 === reverse.length) {
    sentence += `${reverse[i]}. `
    break;
  }
  sentence += `${reverse[i]} `
}



console.log("second method", sentence);





