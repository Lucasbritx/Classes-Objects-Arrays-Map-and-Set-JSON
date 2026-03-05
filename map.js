// cache example
const userCache = new Map();

userCache.set("1", new User("1", "Lucas", "admin"));
userCache.set("2", new User("2", "Henrique", "viewer"));

function getUser(id) {
  return userCache.get(id);
}

console.log(getUser("1"));

// group example
const purchasesByUser = new Map();

const purchases = [
  { userId: "1", value: 20 },
  { userId: "1", value: 40 },
  { userId: "2", value: 10 }
];

for (const purchase of purchases) {
  const current = purchasesByUser.get(purchase.userId) ?? 0;
  purchasesByUser.set(purchase.userId, current + purchase.value);
}

console.log(purchasesByUser);