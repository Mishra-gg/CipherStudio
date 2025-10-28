import React, { createContext, useState } from "react";
import { saveProjectLocal, loadProjectLocal } from "../utils/storage";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState(
    loadProjectLocal("demo") || {
      projectId: "demo",
      files: [
        {
          path: "/App.jsx",
          content: `export default function App(){return <h1>Hello CipherStudio!</h1>}`,
        },
      ],
    }
  );

  const updateFile = (path, newContent) => {
    const updated = {
      ...project,
      files: project.files.map((f) =>
        f.path === path ? { ...f, content: newContent } : f
      ),
    };
    setProject(updated);
    saveProjectLocal(updated);
  };

  const addFile = (path) => {
    setProject({
      ...project,
      files: [...project.files, { path, content: "" }],
    });
  };

  const deleteFile = (path) => {
    setProject({
      ...project,
      files: project.files.filter((f) => f.path !== path),
    });
  };

  return (
    <ProjectContext.Provider
      value={{ project, setProject, updateFile, addFile, deleteFile }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
