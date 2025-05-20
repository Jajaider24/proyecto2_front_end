import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IssueService from "../../services/IssueService";
import { Issue } from "../../models/Issue";

const emptyIssue: Omit<Issue, "id"> = {
  description: "",
  issue_type: "",
  date_reported: "",
  status: "",
  motorcycle_id: 0,
};

const IssueForm = () => {
  const [issue, setIssue] = useState<Omit<Issue, "id">>(emptyIssue);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      IssueService.getIssue(Number(id)).then((data) =>
        setIssue({
          description: data.description,
          issue_type: data.issue_type,
          date_reported: data.date_reported,
          status: data.status,
          motorcycle_id: data.motorcycle_id,
        })
      );
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setIssue({ ...issue, [name]: name === "motorcycle_id" ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      await IssueService.updateIssue({ id: Number(id), ...issue });
    } else {
      await IssueService.createIssue(issue);
    }
    navigate("/issues");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{id ? "Editar Issue" : "Crear Issue"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={issue.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="issue_type"
          placeholder="Tipo de Issue"
          value={issue.issue_type}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="date"
          name="date_reported"
          value={issue.date_reported}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <select
          name="status"
          value={issue.status}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="">Selecciona estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="en_progreso">En progreso</option>
          <option value="resuelto">Resuelto</option>
        </select>
        <input
          type="number"
          name="motorcycle_id"
          placeholder="ID de la Moto"
          value={issue.motorcycle_id}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {id ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
};

export default IssueForm;
