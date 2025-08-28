import mongoose from 'mongoose';

const KshetraSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

export default mongoose.model('Kshetra', KshetraSchema);