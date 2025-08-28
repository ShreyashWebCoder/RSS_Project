import mongoose from 'mongoose';

const SanghatanSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

export default mongoose.model('Sanghatan', SanghatanSchema);