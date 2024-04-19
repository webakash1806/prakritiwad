import mongoose from "mongoose";

mongoose.set('strictQuery', false)

/**
 * The function establishes a connection to a MongoDB database using the Mongoose library.
 */
const connectionToDB = async () => {
    try {
        const { connection } = await mongoose.connect(
            process.env.MONGO_URI
        )
        if (connection) {
            console.log(`connected too MONGODB${connection.host}`)
        }
    }

    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

export default connectionToDB