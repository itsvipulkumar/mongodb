const mongoose = require('mongoose');


// connecting database

mongoose.connect("mongodb://localhost:27017/newdb",
    { useNewUrlParser: true },
).then(() => {
    console.log("Connetion Successful")
}).catch((err) =>
    console.log(err));


// defining schema nd structure of the data base
// Mongoose Built - In Validation using MongoDB
/**
 * 
 * 1. type
 * 2. uppercase
 * 3. lowercase
 * 4. trim ( remove space from start and end)
 * 5. minlength
 * 6. maxlength
 *
 */
const playlistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            lowercase: true,
            trim: true,
            maxlength: 30
        },
        rn: Number,
        city: {
            type: String,
            rewuired: true,
            enum: ["dehradun", "Delhi"] // check values if is in the given array

        },
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
            name: "Raghav singh",
            rn: 16,
            city: "Delhi",

        })


        const result = await collection.insertMany([doc]);
        console.log(result)
    }
    catch (err) {
        console.log(err);
    }
}
// calling function
createDOC();




///  ============== ////

// getting the data from the database or collections

// const getDocument = async () => {
//     const res = await collection.find({ rn: 61 });
//     console.log(res)
// }

// getDocument();










// getting value by operators


// COMPARISION OPERATOR
/**
 *
Name
Description
$eq
Matches values that are equal to a specified value.
$gt
Matches values that are greater than a specified value.
$gte
Matches values that are greater than or equal to a specified value.
$in
Matches any of the values specified in an array.
$lt
Matches values that are less than a specified value.
$lte
Matches values that are less than or equal to a specified value.
$ne
Matches all values that are not equal to a specified value.
$nin
Matches none of the values specified in an array.
 *
 */

// const getDocument = async () => {
//     const res = await collection.find({ rn: { $lt: 10 } }); // data will show those haveless then 10
//     console.log(res)
// }

// const getDocument = async () => {
//     const res = await collection.find({ rn: { $gt: 50 } }); // data will show those have greater then 10
//     console.log(res)
// }



// const getDocument = async () => {
//     const res = await collection.find({ city: { $in: ["Delhi", "Dehradun"] } }); // data will show those belod to "Delhi", "Dehradun" city

//     console.log(res)
// }


// LOGOCAL OPERATOR
/**
 * and , or nor xor
 */

// const getDocument = async () => {
//     const res = await collection
//         .find({ $or: [{ city: "Delhi" }, { rn: { $gt: 50 } }] });
//        // will show the data which have either city : delhi ya phir roll number grater than 50
//     console.log(res)
// }


// const getDocument = async () => {
//     const res = await collection
//         .find({ $and: [{ city: "Delhi" }, { rn: { $gt: 50 } }] });
//     // will show the data which only have  city : delhi and roll number grater than 50
//     console.log(res)
// }




// // ================== counting


// const getDocument = async () => {
//     const res = await collection
//         .find()
//         .countDocuments();
//     console.log(res)
// }


// ================== sorting


// const getDocument = async () => {
//     const res = await collection
//         .find({ name: "Vipul" })
//         .sort({city:1});
//     console.log(res)
// }

// getDocument();



// /// =========== Updation in the documents

// const updateDocuments = async (id) => {
//     try {
//         const res = await collection
//             .updateOne({ _id: id }, { $set: { city: "Dehradun" } });
//         console.log(res);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// const id = "64287fa1c1032163a511487e"
// updateDocuments(id);



/// =========== Delete document

// const deleteDocuments = async (id) => {
//     try {
//         const res = await collection
//             .deleteOne({ _id: id });
//         console.log(res);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// const id = "64287fa1c1032163a511487e"
// deleteDocuments(id);




