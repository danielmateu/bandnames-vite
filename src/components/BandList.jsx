

export const BandList = () => {

    

    return (
        <div className="w-1/2">
            <h2 className="text-white font-semibold">Lista de Bandas</h2>
            <table className="table-auto w-full bg-slate-200 rounded">
                <thead>
                    <tr className="text-center bg-slate-300">
                        <th className="">Nombre</th>
                        <th className="">Votos</th>
                        <th className="">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center hover:bg-slate-300">
                        <td className="border px-4 py-2 text-start">Iron Maiden</td>
                        <td className="border px-4 py-2">15</td>
                        <td className="border px-4 py-2 flex justify-around">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                ⭐
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Borrar
                            </button>
                        </td>
                    </tr>
                    {/* <tr className="text-center hover:bg-slate-300">
                        <td className="border px-4 py-2 text-start">Metallica</td>
                        <td className="border px-4 py-2">5</td>
                        <td className="border px-4 py-2 flex justify-around">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                ⭐
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Borrar
                            </button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}
