import { useEffect, useState } from "react";
import { Photo } from "../../models/Photo";
import PhotoService from "../../services/PhotoService";
import { Link } from "react-router-dom";

const PhotoList = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    PhotoService.getAll().then(setPhotos);
  }, []);

  const deletePhoto = async (id: number) => {
    await PhotoService.remove(id);
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fotografías</h1>
      <Link to="/fotos/nueva" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Nueva Foto
      </Link>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">URL Imagen</th>
            <th className="p-2 border">Leyenda</th>
            <th className="p-2 border">Fecha</th>
            <th className="p-2 border">ID Asunto</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => (
            <tr key={photo.id}>
              <td className="p-2 border">{photo.id}</td>
              <td className="p-2 border">{photo.image_url}</td>
              <td className="p-2 border">{photo.caption}</td>
              <td className="p-2 border">{photo.taken_at}</td>
              <td className="p-2 border">{photo.issue_id}</td>
              <td className="p-2 border space-x-2">
                <Link to={`/fotos/${photo.id}`} className="text-blue-600 hover:underline">Ver</Link>
                <Link to={`/fotos/${photo.id}/editar`} className="text-green-600 hover:underline">Editar</Link>
                <button onClick={() => deletePhoto(photo.id)} className="text-red-600 hover:underline">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PhotoList;
