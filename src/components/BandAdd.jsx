import { useState } from "react"


// eslint-disable-next-line react/prop-types
export const BandAdd = ({ addBand }) => {

    const [valor, setValor] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(valor);
        if(valor.trim().length > 2){
            addBand(valor)
            setValor('')
        }
    }

    return (
        <div className="flex flex-col w-6/12 md:w-3/12">
            <h2 className="text-white font-semibold">Agregar Banda</h2>
            <form
                className="flex flex-col gap-2"
                onSubmit={onSubmit}
            >
                <input
                    type="text"
                    className="bg-white rounded p-2 w-full"
                    placeholder="Nuevo nombre de banda"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Agregar
                </button>
            </form>
        </div>
    )
}
