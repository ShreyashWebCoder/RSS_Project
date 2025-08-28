import mongoose from "mongoose";

const DayitvaSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },

});

export default mongoose.model("Dayitva", DayitvaSchema);
