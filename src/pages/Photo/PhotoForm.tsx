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
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      PhotoService.getById(Number(id)).then(setPhoto);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPhoto({ ...photo, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      await PhotoService.update(Number(id), photo);
    } else {
      await PhotoService.create(photo);
    }
    navigate("/fotos");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">{id ? "Editar Foto" : "Nueva Foto"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="image_url" value={photo.image_url} onChange={handleChange} placeholder="URL de imagen" className="w-full border p-2" />
        <input name="caption" value={photo.caption} onChange={handleChange} placeholder="Leyenda" className="w-full border p-2" />
        <input name="taken_at" value={photo.taken_at} onChange={handleChange} placeholder="Fecha (YYYY-MM-DD)" className="w-full border p-2" />
        <input name="issue_id" type="number" value={photo.issue_id} onChange={handleChange} placeholder="ID del Asunto" className="w-full border p-2" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          {id ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
};

export default PhotoForm;
