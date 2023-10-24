//Object.create();

const JS_user = {
  name: " Sakin",
  age: " 20",
  isLoggedIn: "True",
  LastLogging: ["Today", "NextDay"],
};
// JS_user.name = "Mahid Islam"; // for value change
// console.log(JS_user.name);
// Object.freeze(JS_user); // r kono value change hobe na
{
  const myObj = {
    name: " Sakin",
    location: "Rajshahi",
    Account: "Sakin_dev_79",
  };
  myObj.myFun = function () {
    console.log(this.Account);
  };
}

//Object+  Object
const obj1 = { FirstName: "Sakin", LastName: "Islam" };
const obj2 = { First: "Mahid", Last: "Islam" };
const obj3 = { ...obj1, ...obj2 };
//console.log(obj3);

// DataBase Issue
const user = [
  {
    id: 1,
    email: "x@gmai.com",
  },
  {
    id: 1,
    email: "x@gmai.com",
  },
];
const User = user[1].email;
//console.log(User); //Array moddhe kono obj thakle evabe value access

//Singleton object
const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "sakin Islam";
tinderUser.location = "GMT +6";
//console.log(Object.keys(tinderUser)); // all keys pabo
//console.log(Object.values(tinderUser)); // All Value Pabo

const course = {
  Name: "JavaScript",
  Author: "Hitesh Bhai",
  Fee: " 999rs",
};

const name = course.Name;
console.log(name);
