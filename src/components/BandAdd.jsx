

export const BandAdd = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-white font-semibold">Agregar Banda</h2>  
            <form className="flex flex-col gap-2">
                <input
                    type="text"
                    className="bg-white rounded p-2 w-full"
                    placeholder="Nuevo nombre de banda"
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
