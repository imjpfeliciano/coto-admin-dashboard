import { WithChildren } from "../../../types/components";

const ProfileLayout: React.FC<WithChildren> = ({ children }) => {
  return (
    <div className="w-100 h-100 flex flex-col">
      <h1 className="text-2xl font-bold">Detalle del usuario</h1>
      <div className="h-96">{children}</div>

      <div className="flex flex-row justify-between w-1/2 m-auto">
        <div className="bg-red-200 text-red-500 p-2 rounded cursor-pointer">
          Eliminar
        </div>
        <div className="bg-gray-500 text-white p-2 rounded cursor-pointer">Cancelar y Salir</div>
        <div className="bg-purple-500 text-white p-2 rounded cursor-pointer">Guardar</div>
      </div>

    </div>
  );
}

export default ProfileLayout