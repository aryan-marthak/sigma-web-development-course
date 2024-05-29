const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/Employee");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/company");

app.set("view engine", "ejs");

const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * (arr.length))
    return arr[rno]
}

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
    await Employee.deleteMany({})
  for (let index = 0; index < 10; index++) {

    let randomNames = ['aryan', 'bryan', 'sheldon', 'howard']
    let randomCity = ['rajkot', 'ahmedabad', 'amreli', 'junagadh']
    let randomLang = ['javascipt', 'python', 'C/C++', 'java']

    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 22000),
      language: getRandom(randomLang),
      city: getRandom(randomCity),
      isManager: Math.random() < 0.5,
    });
    console.log(e);
  }
  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
