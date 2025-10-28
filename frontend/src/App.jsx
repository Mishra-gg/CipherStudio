import React from "react";
import { ProjectProvider } from "./context/ProjectContext";
import FileTree from "./components/FileTree";
import EditorPanel from "./components/EditorPanel";
import PreviewPanel from "./components/PreviewPanel";
import Topbar from "./components/Topbar";

function App() {
  return (
    <ProjectProvider>
      <div className="app-container">
        <FileTree />
        <div className="editor">
          <Topbar />
          <EditorPanel />
          <PreviewPanel />
        </div>
      </div>
    </ProjectProvider>
  );
}

export default App;
