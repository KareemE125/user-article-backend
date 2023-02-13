import mongoose from "mongoose"



export default async function connectDB (){
    return await mongoose.connect('mongodb://127.0.0.1:27017/MongoDB101')
        .then(_ => console.log("Database Connected",))
        .catch(error => console.log("Fail To Connect Database",error))
}

