import { useEffect, useState } from "react"


// eslint-disable-next-line react/prop-types
export const BandList = ({ data, voteBand }) => {
    // console.log(data);
    const [bands, setBands] = useState(data)

    useEffect(() => {
        setBands(data)
    }, [data])

    const handleBandName = (e, id) => {
        // console.log(e.target.value, id);
        const newName = e.target.value
        setBands(bands => bands.map(band => {
            if (band.id === id) {
                band.name = newName
            }
            return band
        }
        ))
    }

    const handleOnBlur = (id, name) => {
        console.log(id, name);

        // Disparar el evento del socket


    }


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
                    {
                        bands.map((band) => (
                            <tr key={band.id} className="text-center hover:bg-slate-300">
                                <td className="border px-4 py-2 text-start">
                                    <input
                                        type="text"
                                        className="bg-transparent w-full outline-none"
                                        value={band.name}
                                        onChange={(e) => handleBandName(e, band.id)}
                                        onBlur={() => handleOnBlur(band.id, band.name)}
                                    />
                                </td>
                                <td className="border px-4 py-2">{band.votes}</td>
                                <td className="border px-4 py-2 flex justify-around gap-4">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                                        onClick={() => voteBand(band.id)}
                                    >
                                        ⭐
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                                        Borrar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
