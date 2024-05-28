// CRUD operations
use("crudDb");

// CREATE
db.createCollection("courses");

// db.courses.insertOne({
//   name: "aryans web dev course",
//   price: "0",
//   assignments: "12",
//   projects: 5,
// });

// db.courses.insertMany([
//   {
//     name: "jane's graphic design course",
//     price: "50",
//     assignments: "10",
//     projects: "3",
//   },
//   {
//     name: "john's python programming",
//     price: "30",
//     assignments: "15",
//     projects: "4",
//   },
//   {
//     name: "mike's machine learning",
//     price: "100",
//     assignments: "20",
//     projects: "6",
//   },
//   {
//     name: "emma's data science bootcamp",
//     price: "200",
//     assignments: "25",
//     projects: "8",
//   },
//   {
//     name: "lucas' web development",
//     price: "0",
//     assignments: "12",
//     projects: "5",
//   },
//   {
//     name: "sophia's digital marketing",
//     price: "75",
//     assignments: "18",
//     projects: "7",
//   },
// ]);

// READ
// let a = db.courses.find({price: "0"})
// console.log(a.toArray());

// let b = db.courses.findOne({price: "0"})
// console.log(b);

//UPDATE

// db.courses.updateOne({price: "0"}, {$set:{price: "100"}})

// db.courses.updateMany({price: "0"}, {$set:{price: "100"}})

//DELETE

db.courses.deleteOne({price: "100"})
