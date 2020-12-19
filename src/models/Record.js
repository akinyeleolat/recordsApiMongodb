import mongoose from 'mongoose';


const RecordSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  key: String,
  createdAt: Date,
  counts: Array,
  value: String,
});

export default mongoose.model('Records', RecordSchema);
