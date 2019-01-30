const db = require("./models");

// boot seed data

const boots = [
  {
    gender: "women",
    category: "boots",
    subCategory: "ankle boots and booties",
    womensSize: 5.5,
    womensWidth: "M",
    brand: "aerosoles",
    footShape: 1
  },
  {
    gender: "women",
    category: "boots",
    subCategory: "ankle boots and booties",
    womensSize: 5.5,
    womensWidth: "M",
    brand: "bcbgeneration",
    price: "$100.00 and under",
    footShape: 2
  },
  {
    gender: "women",
    category: "boots",
    subCategory: "chelsea boots",
    womensSize: 9.5,
    price: "$75.00 and under",
    color: "black",
    occasion: "casual",
    footShape: 3
  }
];

// delete all shoes
db.Shoe.deleteMany(err => {
  if (err) throw err;
  console.log("all shoes deleted from db");

  // create shoes
  db.Shoe.create(boots, (err, newBoots) => {
    if (err) {
      return console.log(err);
    }
    console.log(`saved new boots: ${newBoots}`);

    //exit
    process.exit();
  });
});
