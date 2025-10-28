import React, { useContext, useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { ProjectContext } from "../context/ProjectContext";

export default function EditorPanel() {
  const { project, updateFile } = useContext(ProjectContext);
  const [active, setActive] = useState(project.files[0].path);

  const sandpackFiles = {};
  project.files.forEach((f) => (sandpackFiles[f.path] = { code: f.content }));

  return (
    <div style={{ flex: 1 }}>
      <select
        value={active}
        onChange={(e) => setActive(e.target.value)}
        style={{ width: "100%", padding: "6px" }}
      >
        {project.files.map((f, i) => (
          <option key={i}>{f.path}</option>
        ))}
      </select>

      <Sandpack
        template="react"
        files={sandpackFiles}
        options={{ autorun: true, showConsole: true }}
        customSetup={{ dependencies: { react: "18", "react-dom": "18" } }}
        theme="auto"
        onChange={(path, code) => updateFile(path, code)}
      />
    </div>
  );
}
