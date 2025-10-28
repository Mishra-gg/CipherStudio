import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  path: String,
  content: String,
});

const projectSchema = new mongoose.Schema({
  projectId: { type: String, unique: true },
  title: String,
  files: [fileSchema],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Project", projectSchema);
