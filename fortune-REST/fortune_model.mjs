import mongoose from 'mongoose';
import crypto from 'crypto';

import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});


/**
 * Define the User schema
 */
 const userSchema = mongoose.Schema({
    userName: { type: String, required: true },
    passwordSalt: { type: String, required: true },
    passwordHash: { type: String, required: true },
    dateCreated: { type: String, required: true }
});

/**
 * Define the Fortune Cookie schema
 */
const fortuneSchema = mongoose.Schema({
    category: { type: String, required: true },
    fortune: { type: String, required: true },
    ownerID: { type: String, required: true }, 
    dateCreated: { type: String, required: true }
});

/**
 * Compile the models from the schema.
 */
const User = mongoose.model("User", userSchema);
const Fortune = mongoose.model("Fortune", fortuneSchema);


const addUser = async (userName, password) => {

    // First, see if this userName is taken
    const lookup = User.findOne({userName})
    const existingUser = await lookup.exec();
    console.log({existingUser});
    if (existingUser !== null)
        throw new Error("Username taken");

    // Got ideas from https://www.geeksforgeeks.org/node-js-password-hashing-crypto-module/
    const dateCreated = new Date().toUTCString();
    const passwordSalt = crypto.randomBytes(16).toString('hex');

    // // Hashing user's salt and password with 1000 iterations, 64 length and sha512 digest
    const passwordHash = crypto.pbkdf2Sync(password, passwordSalt, 1000, 64, `sha512`).toString(`hex`);
    console.log({passwordHash, passwordSalt});
    const userRecord = new User({ userName, passwordHash, passwordSalt, dateCreated });
    return userRecord.save();
}


// Quick way to print a list of users if needed
// const dumpUsers = async () => {
//     const list = User.find({})
//     const results = await list.exec()
//     console.dir(results);
// }

// dumpUsers()



const createFortune = async (category, fortune, ownerID) => {
    const dateCreated = new Date().toUTCString();
    const fortuneRecord = new Fortune({ category, fortune, ownerID, dateCreated });
    return fortuneRecord.save();
}

const findFortunes = async (filter) => {
    const query = Fortune.find(filter)
    // .select(projection)
    // .limit(limit)
    return query.exec()
}

// Returns an array of 1 items currently - but could be extended to return N
const getRandomFortune = async (category) => {
    const query = Fortune.aggregate([
        { $match: { category } },
        { $sample: { size: 1 } } ])
    return query.exec()

}

const findFortuneById = async (_id) => {
    const searchResult = Fortune.findById(_id)
    return searchResult.exec()
}

const findFortuneByUserName = async (userName) => {
    const searchResult = Fortune.find({ userName })
    return searchResult.exec()
}

const replaceFortune = async(_id, category, fortune) => {
    const filter = {"_id": _id}
    const update = {}
    if (category !== undefined) {
        update.category = category
    }
    if (fortune !== undefined) {
        update.fortune = fortune
    }
    const result = await Fortune.updateOne(filter, update)
    return result.matchedCount
}

const deleteById = async (_id) => {
    const result = await Fortune.deleteOne({ _id: _id })
    return result.deletedCount;
}

const deleteAll = async (userName) => {
    const result = await Fortune.deleteMany({ownerID: userName})
    return result.deletedCount;
}

function isCategoryValid(category) {
    return category == "general" || category == "humor-included" || category == "child-friendly";
}

export { addUser, createFortune, findFortunes, findFortuneById, findFortuneByUserName, replaceFortune, deleteById, deleteAll, isCategoryValid, getRandomFortune }