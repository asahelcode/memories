import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  //uniform representation of posts
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Model instance for performing action within the database
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
