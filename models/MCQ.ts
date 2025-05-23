import mongoose from 'mongoose';

const mcqSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  questions: [{
    question: {
      type: String,
      required: true,
    },
    options: [{
      type: String,
      required: true,
    }],
    correctAnswer: {
      type: Number,
      required: true,
    },
    explanation: String,
  }],
  timeLimit: {
    type: Number,
    default: 60, // in minutes
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MCQ = mongoose.models.MCQ || mongoose.model('MCQ', mcqSchema);

export default MCQ;