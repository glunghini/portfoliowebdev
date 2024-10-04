export default function Cards({ dados }) {
    return (
      <div className="flex flex-col space-y-12 px-4">
        {dados.map((pegaDados, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-300 bg-opacity-75 p-6 rounded-lg shadow-lg text-center mt-10"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold">{pegaDados.titulo}</h2>
            </div>
            <div className="mb-4">
              <p className="text-base text-gray-700">{pegaDados.descricao}</p>
            </div>
            <div className="flex justify-center">
              <img
                src={pegaDados.imagem}
                alt={pegaDados.titulo}
                className="w-full max-w-4xl object-contain rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  