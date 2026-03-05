const superHeroes = require("./json_structure.json");

console.log(superHeroes.homeTown);
console.log(superHeroes.members[1].powers[2]);

/* output
Metro City
Superhuman reflexes
*/

// ----- JSON parse

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// output: 42

console.log(obj.result);
// output: true

JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
