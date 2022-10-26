import React from "react";
import { choice, remove } from "./helpers";
import foodArr from "./foods";

let randFood = choice(foodArr);

console.log(`I’d like one ${randFood}, please.`);
console.log(`Here you go: ${randFood}`);
console.log(`Delicious! May I have another?`);

let eaten = remove(randFood, foodArr);

console.log(`I’m sorry, we’re all out. We have ${eaten.length} left.`);
