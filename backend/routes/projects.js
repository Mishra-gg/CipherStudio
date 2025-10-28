import express from "express";
import Project from "../models/Project.js";
const router = express.Router();

router.post("/save", async (req, res) => {
  const { projectId, title, files } = req.body;
  let project = await Project.findOne({ projectId });
  if (!project) {
    project = new Project({ projectId, title, files });
  } else {
    project.title = title;
    project.files = files;
  }
  await project.save();
  res.json({ success: true, projectId });
});

router.get("/:projectId", async (req, res) => {
  const project = await Project.findOne({ projectId: req.params.projectId });
  if (!project) return res.status(404).json({ message: "Not found" });
  res.json(project);
});

export default router;
