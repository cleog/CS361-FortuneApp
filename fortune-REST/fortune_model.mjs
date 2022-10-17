import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const fortuneSchema = mongoose.Schema({
    category: { type: String, required: true },
    fortune: { type: String, required: true },
    ownerID: { type: String, required: true }, 
    dateCreated: { type: String, required: true }
});

/**
 * Compile the model from the schema.
 */
const Fortune = mongoose.model("Fortune", fortuneSchema);

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
    // TODO: Make this random. Currently it just gets first of the chosen category
    // const query = Fortune.findOne({ category })
    // return query.exec()

    const query = Fortune.aggregate([
        { $match: { category } },
        { $sample: { size: 1 } } ])
    return query.exec()

}

const findFortuneById = async (_id) => {
    const searchResult = Fortune.findById(_id)
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
    // return result.modifiedCount;
}

const deleteById = async (_id) => {
    const result = await Fortune.deleteOne({ _id: _id })
    return result.deletedCount;
}

function isCategoryValid(category) {
    return category == "general" || category == "humor-included" || category == "child-friendly";
}

export { createFortune, findFortunes, findFortuneById, replaceFortune, deleteById, isCategoryValid, getRandomFortune }