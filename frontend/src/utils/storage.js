export function saveProjectLocal(project) {
  localStorage.setItem(
    `cipherstudio:${project.projectId}`,
    JSON.stringify(project)
  );
}

export function loadProjectLocal(projectId) {
  const raw = localStorage.getItem(`cipherstudio:${projectId}`);
  return raw ? JSON.parse(raw) : null;
}
