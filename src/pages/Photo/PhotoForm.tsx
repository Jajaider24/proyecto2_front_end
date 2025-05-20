import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhotoService from "../../services/PhotoService";
import { Photo } from "../../models/Photo";

const emptyPhoto: Photo = {
  id: 0,
  image_url: "",
  caption: "",
  taken_at: "",
  issue_id: 0,
};

const PhotoForm = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState<Photo>(emptyPhoto);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      PhotoService.getById(Number(id))
        .then(setPhoto)
        .catch(() => {
          setError("Error al cargar la foto");
        });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPhoto({ ...photo, [name]: value });
  };

  const validateFields = () => {
    if (
      !photo.image_url.trim() ||
      !photo.caption.trim() ||
      !photo.taken_at.trim()
    ) {
      return "Todos los campos son obligatorios.";
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(photo.taken_at)) {
      return "La fecha debe tener el formato YYYY-MM-DD.";
    }

    if (photo.issue_id <= 0) {
      return "El ID del Asunto debe ser mayor a 0.";
    }

    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationMessage = validateFields();
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    try {
      if (id) {
        await PhotoService.update(Number(id), photo);
      } else {
        await PhotoService.create(photo);
      }
      navigate("/fotos");
    } catch (err) {
      setError("Error al guardar la foto.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {id ? "Editar Foto" : "Nueva Foto"}
      </h1>

      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="image_url" className="block font-medium mb-1">
            URL de la imagen
          </label>
          <input
            id="image_url"
            name="image_url"
            type="url"
            value={photo.image_url}
            onChange={handleChange}
            placeholder="https://example.com/foto.jpg"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="caption" className="block font-medium mb-1">
            Leyenda
          </label>
          <input
            id="caption"
            name="caption"
            value={photo.caption}
            onChange={handleChange}
            placeholder="Ej. Daño en fachada"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="taken_at" className="block font-medium mb-1">
            Fecha de captura
          </label>
          <input
            id="taken_at"
            name="taken_at"
            type="date"
            value={photo.taken_at}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="issue_id" className="block font-medium mb-1">
            ID del Asunto
          </label>
          <input
            id="issue_id"
            name="issue_id"
            type="number"
            value={photo.issue_id}
            onChange={handleChange}
            placeholder="Ej. 12"
            className="w-full p-2 border rounded"
            required
            min={1}
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          {id ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
};

export default PhotoForm;
