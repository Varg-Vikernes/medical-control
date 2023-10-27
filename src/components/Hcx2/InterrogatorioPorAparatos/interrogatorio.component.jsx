import React from "react";

const AntecedentesPorAparatos = () => {
    return (
        <>
            <form action="" className="w-full p-4">

                <h1 className="text-xl  font-sans mb-4">Interrogatorio por aparatos y sistemas </h1>
                <div className="flex-1 mr-4">
                    <label htmlFor="Digestivo" className="block font-bold">
                        Digestivo:
                    </label>
                    <input type="text" name="Digestivo" id="Digestivo"
                        className="w-full border p-2 w-full"
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="genitourinario" className="block font-bold">
                        Genitourinario:
                    </label>
                    <input type="text" name="genitourinario" id="genitourinario"
                        className="w-full border p-2 w-full"
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="cardiovascular" className="block font-bold">
                        Cardiovascular:
                    </label>
                    <input type="text" name="cardiovascular" id="cardiovascular"
                        className="w-full border p-2 w-full"
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="respiratorio" className="block font-bold">
                        Respiratorio
                    </label>
                    <input type="text" name="respiratorio" id="respiratorio"
                        className="w-full border p-2 w-full"
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="neurologico" className="block font-bold">
                        Neurologico:
                    </label>
                    <input type="text" name="neurologico" id="neurologico"
                        className="w-full border p-2 w-full"
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="pielTegumentos" className="block font-bold">
                        Piel y tegumentos
                    </label>
                    <input type="text" name="pielTegumentos" id="pielTegumentos"
                        className="w-full border p-2 w-full"
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="endocrino" className="block font-bold">
                        Endocrino:
                    </label>
                    <input type="text" name="endocrino" id="endocrino"
                        className="w-full border p-2 w-full"
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="hematologico" className="block font-bold">
                        Hematologico:
                    </label>
                    <input type="text" name="hematologico" id="hematologico"
                        className="w-full border p-2 w-full"
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="siquiatrico" className="block font-bold">
                        Siquiatrico:
                    </label>
                    <input type="text" name="siquiatrico" id="hsiquiatrico"
                        className="w-full border p-2 w-full"
                    />
                </div>
            </form>
        </>
    )
}
export default AntecedentesPorAparatos