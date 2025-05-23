import mongoose from 'mongoose';

const downloadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  fileUrl: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  downloadCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Download = mongoose.models.Download || mongoose.model('Download', downloadSchema);

export default Download;