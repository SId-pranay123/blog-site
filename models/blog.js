import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User", //one to many relationship
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    idea: {
      type: String,
      required: [true, "Main idea is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = models.Blog || model("Blog", BlogSchema);
export default Blog;
