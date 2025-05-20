import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import IssueService from "../../services/IssueService";
import { Issue } from "../../models/Issue";

const IssueDetail = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    if (id) {
      IssueService.getIssue(Number(id)).then(setIssue).catch(() => {
        setIssue(null);
      });
    }
  }, [id]);

  if (!issue) {
    return <p className="p-6 text-red-500">Issue no encontrado</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Detalles del Issue</h1>
      <div className="border p-4 rounded shadow space-y-2">
        <p><strong>ID:</strong> {issue.id}</p>
        <p><strong>Descripción:</strong> {issue.description}</p>
        <p><strong>Tipo:</strong> {issue.issue_type}</p>
        <p><strong>Fecha de Reporte:</strong> {issue.date_reported}</p>
        <p><strong>Estado:</strong> {issue.status}</p>
        <p><strong>ID de Moto:</strong> {issue.motorcycle_id}</p>
      </div>
      <div className="mt-4 space-x-2">
        <Link
          to={`/issues/${issue.id}/editar`}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Editar
        </Link>
        <Link
          to="/issues"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Volver
        </Link>
      </div>
    </div>
  );
};

export default IssueDetail;
