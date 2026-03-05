// simple example
const onlineUsers = new Set();

onlineUsers.add("user1");
onlineUsers.add("user2");
onlineUsers.add("user1"); 
console.log(onlineUsers);
// output: Set(2) { 'user1', 'user2' }

// remove duplicates
const ids = ["1","2","2","3","3","3"];

const unique = [...new Set(ids)];

console.log(unique);
// output [ '1', '2', '3' ]

// example intersection
const frontendSkills = new Set(["React", "CSS", "TypeScript"]);
const backendSkills = new Set(["Node", "TypeScript", "SQL"]);

const intersection = new Set(
  [...frontendSkills].filter(skill => backendSkills.has(skill))
);

console.log(intersection);
// output: Set(1) { 'TypeScript' }