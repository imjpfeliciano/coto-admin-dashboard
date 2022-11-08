const ProfileLayout = ({ children }) => {
  return (
    <div className="w-100 h-100 relative">
      <h1 className="text-2xl font-bold">Detalle del usuario</h1>
      <div className="">{children}</div>
      <div className="w-100 fixed bottom-0">
        <div className=" bg-gray-200 flex flex-row justify-between">
          <div className="bg-red-200 text-red-500 p-2 rounded cursor-pointer">
            Eliminar
          </div>
          <div className="bg-gray-500 text-white p-2 rounded cursor-pointer">Cancelar y Salir</div>
          <div className="bg-purple-500 text-white p-2 rounded cursor-pointer">Guardar</div>
        </div>

      </div>
    </div>
  );
}

export default ProfileLayout