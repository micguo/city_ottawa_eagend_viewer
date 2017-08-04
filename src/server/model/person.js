import mongoose from "./mongoose";

let PersonSchema = new mongoose.Schema({
    fristname: String,
    lastname: String
});

export default mongoose.model('Person', PersonSchema);
