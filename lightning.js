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

console.log(person[1].introduceYourself())

const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

const getBiffed = `Hi. My name is ${name}, and I'm ${age} years old. 
They say that makes me a ${generationStereotype}. In ${timeSpan} years 
I'll be ${futureAge}. I guess that means I'll be a ${dadJoke} then. Ha ha!`

console.log(getBiffed);