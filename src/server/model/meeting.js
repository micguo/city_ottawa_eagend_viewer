import mongoose from "./mongoose";

let MeetingSchema = new mongoose.Schema({
    id: Number,
    title: String,
    date: Date,
    contact: String
});

export default mongoose.model('Meeting', MeetingSchema);