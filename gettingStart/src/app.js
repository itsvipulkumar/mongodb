const mongoose = require('mongoose');


// connecting database

mongoose.connect("mongodb://localhost:27017/newdb",
    { useNewUrlParser: true },
).then(() => {
    console.log("Connetion Successful")
}).catch((err) =>
    console.log(err));


// defining schema nd structure of the data base
const playlistSchema = new mongoose.Schema(
    {
        name: String,
        rn: Number,
        city: String,
        date: {
            type: Date,
            default: Date.now
        }

    }
)

// // collection crating
// const collection = new mongoose.model("Developer", playlistSchema);


// // crearting documents and insert the data into field
// const createDOC = async () => {
//     try {
//         const doc = new collection({
//             name: "Sumit",
//             rn: 56,
//             city: "Dearadun",

//         })
//         const result = await doc.save();
//         console.log(result)
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// // calling function

// createDOC();



//// multipel data inserting



// collection crating
const collection = new mongoose.model("Developer", playlistSchema);


// crearting documents and insert the data into field
const createDOC = async () => {
    try {
        const doc = new collection({
            name: "Sumit",
            rn: 56,
            city: "Dearadun",

        })
        const doc2 = new collection({
            name: "Vipul",
            rn: 61,
            city: "Bijnor",

        })
        const result = await collection.insertMany([doc, doc2]);
        // console.log(result)
    }
    catch (err) {
        console.log(err);
    }
}
// calling function
// createDOC();




///  ============== ////

// getting the data from the database or collections

const getDocument = async () => {
    const res = await collection.find({ name: "Vipul" }, { name: 1 }, { _id: 0 });
    console.log(res)
}

getDocument();



