import { Issue } from "../models/Issue";

const API_URL = "http://localhost:5000/issues"; // Cambia si tu API usa otro puerto o ruta base

const getIssues = async (): Promise<Issue[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener issues");
  return response.json();
};

const getIssue = async (id: number): Promise<Issue> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Error al obtener el issue");
  return response.json();
};

const createIssue = async (issue: Omit<Issue, "id">): Promise<Issue> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(issue),
  });
  if (!response.ok) throw new Error("Error al crear issue");
  return response.json();
};

const updateIssue = async (issue: Issue): Promise<Issue> => {
  const response = await fetch(`${API_URL}/${issue.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(issue),
  });
  if (!response.ok) throw new Error("Error al actualizar issue");
  return response.json();
};

const deleteIssue = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar issue");
};

export default {
  getIssues,
  getIssue,
  createIssue,
  updateIssue,
  deleteIssue,
};
