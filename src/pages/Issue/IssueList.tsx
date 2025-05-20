import { useEffect, useState } from "react";
import { Issue } from "../../models/Issue";
import IssueService from "../../services/IssueService";
import { Link } from "react-router-dom";

const IssueList = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    IssueService.getIssues().then(setIssues);
  }, []);

  const deleteIssue = async (id: number) => {
    await IssueService.deleteIssue(id);
    setIssues(issues.filter((issue) => issue.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Issues</h1>
      <Link
        to="/issues/nueva"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Crear Issue
      </Link>
      <table className="w-full table-auto border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Descripción</th>
            <th className="p-2 border">Tipo</th>
            <th className="p-2 border">Fecha Reporte</th>
            <th className="p-2 border">Estado</th>
            <th className="p-2 border">Moto ID</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td className="p-2 border">{issue.id}</td>
              <td className="p-2 border">{issue.description}</td>
              <td className="p-2 border">{issue.issue_type}</td>
              <td className="p-2 border">{issue.date_reported}</td>
              <td className="p-2 border">{issue.status}</td>
              <td className="p-2 border">{issue.motorcycle_id}</td>
              <td className="p-2 border space-x-2">
                <Link
                  to={`/issues/${issue.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Detalles
                </Link>
                <button
                  onClick={() => deleteIssue(issue.id)}
                  className="text-red-600 hover:underline"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueList;

