import mongoose from "/mongoose";

Schema = mongoose.Schema;

MeetingSchema = new Schema({
  id: Number,
  type: String,
  date: Date
});

export default mongoose.model('Meeting', MeetingSchema);