import mongoose from "./mongoose";

let PersonSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

export default mongoose.model('Person', PersonSchema);
