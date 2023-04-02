const mongoose = require('mongoose');
const validator = require('validator')

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
// const playlistSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             lowercase: true,
//             trim: true,
//             maxlength: 30
//         },
//         rn: {
//             type: Number,
//             validate(value) {
//                 if (value < 0) {
//                     throw new Error("Roll NO cant be negative")
//                 }
//             }
//         },
//         city: {
//             type: String,
//             rewuired: true,
//             enum: ["dehradun", "Delhi"] // check values if is in the given array

//         },
//         date: {
//             type: Date,
//             default: Date.now
//         }

//     }
// )


const playlistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            lowercase: true,
            trim: true,
            maxlength: 30
        },
        rn: {
            type: Number,
            validate(value) {
                if (value < 0) {
                    throw new Error("Roll NO cant be negative")
                }
            }
        },
        city: {
            type: String,
            required: true,

        },
        email: {
            type: String,
            unique: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("not a valid email")
                }
            }

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


// // crearting documents and insert the data into field
// const createDOC = async () => {
//     try {
//         const doc = new collection({
//             name: "Anu Chauann",
//             rn: 14,
//             city: "Najibabad",

//         })
//         const doc1 = new collection({
//             name: "Vikas Chauann",
//             rn: 74,
//             city: "Najibabad",

//         })
//         const doc2 = new collection({
//             name: "Vimal",
//             rn: 67,
//             city: "Rajpur",

//         })


//         const result = await collection.insertMany([doc,doc1,doc]);
//         console.log(result)
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// // calling function
// createDOC();




///  ============== ////

// getting the data from the database or collections

// const getDocument = async () => {
//     const res = await collection.find({ rn: 61 });
//     console.log(res)
// }

// getDocument();






// crearting documents and insert the data into field
const createDOC = async () => {
    try {
        const doc = new collection({
            name: "Arjun",
            rn: 18,
            email: "arjun@gmail.ccom",
            city: "Agra",

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




