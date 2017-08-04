import mongoose from "./mongoose";

let CommitteeSchema = new mongoose.Schema({
    name: String
});

export default mongoose.model('Committee', CommitteeSchema);
