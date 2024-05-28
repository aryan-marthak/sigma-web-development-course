/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  {
      "name": "java",
      "price": 20000,
      "instructor": "harry"
  },
  {
      "name": "python",
      "price": 18000,
      "instructor": "alice"
  },
  {
      "name": "javascript",
      "price": 22000,
      "instructor": "bob"
  },
  {
      "name": "ruby",
      "price": 19000,
      "instructor": "charlie"
  },
  {
      "name": "c++",
      "price": 21000,
      "instructor": "david"
  },
  {
      "name": "c#",
      "price": 23000,
      "instructor": "eve"
  },
  {
      "name": "go",
      "price": 20000,
      "instructor": "frank"
  },
  {
      "name": "swift",
      "price": 25000,
      "instructor": "grace"
  },
  {
      "name": "kotlin",
      "price": 19000,
      "instructor": "heidi"
  },
  {
      "name": "php",
      "price": 17000,
      "instructor": "ivan"
  },
  {
      "name": "rust",
      "price": 24000,
      "instructor": "judy"
  }
]
);

console.log(`done inserting data`);