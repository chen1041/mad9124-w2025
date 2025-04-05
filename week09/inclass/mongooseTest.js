const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/test")
    .then(() => console.log("Connected to mongodb"))
    .catch((e) => console.error(`Error connecting to mongodb: ${e.message}`));

const Cat = mongoose.model("Cat", { name: String, age: Number });
const main = async () => {
    // const kitty = new Cat({ name: "Callie", age: 6 });
    // const savedKitty = await kitty.save();
    // console.log(`${savedKitty.name} says 'meow'`);

    // const newCats = [
    //     { name: "Jack", age: 7 },
    //     { name: "Penny", age: 8 },
    //     { name: "Ross", age: 1 },
    // ];
    // const docs = await Cat.insertMany(newCats);
    const cats = await Cat.find();
    const catsSpot = await Cat.find({ name: "Spot" });
    const catsNamedSpotRegexp = await Cat.find({ name: /P/ });
    console.log(catsNamedSpotRegexp);
};

main();
