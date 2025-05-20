import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotoService from "../../services/PhotoService";
import { Photo } from "../../models/Photo";

const PhotoDetail = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const data = await PhotoService.getById(Number(id));
        setPhoto(data);
      } catch (err) {
        console.error("Error al obtener la foto:", err);
        setError("No se encontró la foto solicitada.");
      }
    };

    if (id) {
      fetchPhoto();
    }
  }, [id]);

  if (error) {
    return (
      <div className="p-6 text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  if (!photo) return <div className="p-6">Cargando...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detalle de Foto</h1>
      <p><strong>ID:</strong> {photo.id}</p>
      <p><strong>URL Imagen:</strong> {photo.image_url}</p>
      <p><strong>Leyenda:</strong> {photo.caption}</p>
      <p><strong>Fecha:</strong> {photo.taken_at.split("T")[0]}</p>
      <p><strong>ID Asunto:</strong> {photo.issue_id}</p>
      <img
        src={photo.image_url}
        alt={photo.caption}
        className="mt-4 w-64 h-auto rounded shadow"
        onError={(e) => (e.currentTarget.src = "/placeholder.jpg")}
      />
    </div>
  );
};

export default PhotoDetail;
