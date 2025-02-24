
const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: true },
    { name: "Charlie", active: true }
  ];
  
  const allActive = users.every(user => user.active ==true);
  console.log(allActive);