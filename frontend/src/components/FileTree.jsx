import React, { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";

export default function FileTree() {
  const { project, addFile, deleteFile } = useContext(ProjectContext);
  const [newFile, setNewFile] = useState("");

  return (
    <div className="sidebar">
      <h3 style={{ padding: "8px" }}>Files</h3>
      <ul>
        {project.files.map((file, i) => (
          <li key={i} style={{ padding: "4px 12px" }}>
            {file.path}
            <button
              style={{ float: "right" }}
              onClick={() => deleteFile(file.path)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <div style={{ padding: "8px" }}>
        <input
          value={newFile}
          onChange={(e) => setNewFile(e.target.value)}
          placeholder="/NewFile.jsx"
        />
        <button onClick={() => addFile(newFile)}>Add</button>
      </div>
    </div>
  );
}
