import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
  },
  lessons: {
    type: Number,
    required: [true, 'Number of lessons is required'],
    min: 1,
  },
  instructor: {
    type: String,
    required: [true, 'Instructor name is required'],
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: [true, 'Level is required'],
  },
  tags: [{
    type: String,
  }],
  students: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

export default Course;