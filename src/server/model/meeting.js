import mongoose from "./mongoose";

let MeetingSchema = new mongoose.Schema({
    id: Number,
    type: String,
    date: Date
});

export default mongoose.model('Meeting', MeetingSchema);