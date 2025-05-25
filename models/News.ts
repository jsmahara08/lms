import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  excerpt: {
    type: String,
    required: [true, 'Excerpt is required'],
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  tags: [{
    type: String,
  }],
});

const News = mongoose.models.News || mongoose.model('News', newsSchema);

export default News;