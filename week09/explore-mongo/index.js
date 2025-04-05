//---------我写的-------//
// "use strict";

// const mongoose = require("mongoose");

// const catSchema = new mongoose.Schema(
//     {
//         name: String,
//         age: Number,
//         lives: Number,
//         favouriteFoods: [String],
//     },
//     {
//         timestamps: true,
//     }
// );

// const Cat = mongoose.model("Cat", catSchema);

// const main = async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/explore-mongo");

//         // Get all cats
//         // const allCats = await Cat.find({});
//         // console.log("all", allCats);

//         // Get all cats with 9 lives
//         // const result = await Cat.find({ lives: 9 });
//         // console.log(result);

//         // Get all cats older than 9 years old
//         // const result = await Cat.find({ lives: { $gt: 9 } });
//         // console.log(result);

//         // Get all cats whose name starts with `G`
//         // const result = await Cat.find({ name: /^G/ });
//         // console.log(result);

//         // Get all cats that like tuna
//         // const result = await Cat.find({ favouriteFoods: "tuna" });//
//         // console.log(result);

//         // Get all cats that don't like tuna
//         // const result = await Cat.find({ favouriteFoods: { $nin: ["tuna"] } });
//         // console.log(result);

//         // Get all cats that like potatoes or strawberry
//         // const result = await Cat.find({
//         //     favouriteFoods: { $in: ["potatoes", "strawberry"] },
//         // });
//         // console.log(result);

//         // Get all cats that like mice and biscuits
//         // const result = await Cat.find({
//         //     favouriteFoods: { $in: ["mice", "biscuits"] },
//         // });
//         // console.log(result, "number:" + result.length);

//         // Get the oldest cat
//         // const result = await Cat.findOne().sort({ age: -1, _id: 1 });

//         // console.log(result, "number:" + result.length);

//         // Get the oldest cat that likes fish
//         // const result = await Cat.findOne({ favouriteFoods: "fish" }).sort({
//         //     age: -1,
//         //     _id: 1,
//         // });

//         // console.log(result, "number:" + result.length);
//         // Get the cat with the least lives that like milk and biscuits
//         const result = await Cat.findOne({
//             favouriteFoods: { $in: ["milk", "biscuits"] },
//         }).sort({
//             lives: 1,
//             _id: 1,
//         });

//         console.log(result, "number:" + result.length);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         await mongoose.disconnect();
//     }
// };

// main();

//-------------下面是老师写的-----------/; /////
("use strict");

const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
    },
    {
        timestamps: true,
    }
);

const trickScheme = new mongoose.Schema(
    {
        name: String,
        dateLearned: Date,
    },
    {
        timestamps: true,
    }
);

const catSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        lives: Number,
        favouriteFoods: [String],
        trick: [trickScheme],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Person",
        },
    },
    {
        timestamps: true,
    }
);

const Cat = mongoose.model("Cat", catSchema);
const Person = mongoose.model("Person", personSchema);

const main = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/explore-mongo");

        // const me = new Person({ firstName: "tim", lastName: "robillard" });
        // await me.save();

        const cat = await Cat.findById("668ef2dad1587b603e959455").populate(
            "owner"
        );
        console.log(cat);

        // Get all cats
        // const allCats = await Cat.find({});
        // console.log("all", allCats.length);

        // // Get all cats with 9 lives
        // const nineCats = await Cat.find({ lives: 9 });
        // console.log("9 live cats", nineCats.length);

        // // Get all cats older than 9 years old
        // const nineYoCats = await Cat.find({ age: { $gt: 9 } });
        // console.log("older than 9 cats", nineYoCats.length);

        // // Get all cats whose name starts with `G`
        // // const gCats = await Cat.find({ name: /^G/ } });
        // const gCats = await Cat.find({ name: { $regex: "^G" } });
        // console.log("Starting with G cats", gCats.length);

        // // Get all cats that like tuna
        // const tunaCats = await Cat.find({ favouriteFoods: "tuna" });
        // console.log("Tuna loving cats", tunaCats.length);

        // // Get all cats that don't like tuna
        // const noTunaCats = await Cat.find({ favouriteFoods: { $ne: "tuna" } });
        // console.log("Tuna hating cats", noTunaCats.length);

        // // Get all cats that like potatoes or strawberry
        // // const potStrawCats = await Cat.find({
        // // $or: [
        // //   {   favouriteFoods: 'potatoes'},
        // //   {   favouriteFoods: 'strawberries' },
        // // ]
        // // });
        // const potStrawCats = await Cat.find({
        //     favouriteFoods: { $in: ["potatoes", "strawberries"] },
        // });
        // console.log("Potato or strawberry cats", potStrawCats.length);

        // // Get all cats that like mice and biscuits
        // const miceBiscuitsCats = await Cat.find({
        //     $and: [{ favouriteFoods: "biscuits" }, { favouriteFoods: "sushi" }],
        // });
        // console.log("Mice and buiscuits cats", miceBiscuitsCats.length);

        // // Get the oldest cat
        // const oldestCat = await Cat.findOne({}).sort({ age: -1, _id: 1 });
        // console.log("Oldest cat", oldestCat);

        // // Get the oldest cat that likes fish
        // const oldestFishCat = await Cat.findOne({
        //     favouriteFoods: "fish",
        // }).sort({
        //     age: -1,
        //     _id: 1,
        // });
        // console.log("Oldest fish cat", oldestFishCat);

        // // Get the cat with the least lives that like milk and biscuits
        // const leastLivesCat = await Cat.findOne({
        //     $and: [{ favouriteFoods: "milk" }, { favouriteFoods: "biscuits" }],
        // }).sort({ lives: 1, _id: 1 });
        // console.log("Least lives cat", leastLivesCat);
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
};

main();
