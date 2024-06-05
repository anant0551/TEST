const marvel_hero = ["ironman", "captain america", "thor"]
const dc_hero = ["superman", "batman", "wonderwoman"]

// marvel_hero.push(dc_hero)

// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

// const allHero = marvel_hero.concat(dc_hero)
// console.log(allHero);

const all_new_hero = [...marvel_hero,...dc_hero]

// console.log(all_new_hero);

const anothoer_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

const real_another_array = anothoer_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("ANANT"))
console.log(Array.from("ANANT"));
console.log(Array.from({name: "ANANT"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));