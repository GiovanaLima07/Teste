
function Hero() {
    
    return (
        <main
            id="hero-carrossel"
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: "url('/imgHero/Fundo.png')" }}
        >
            {/* Formulário de busca */}
            <div
                id="pesquisa"
                className="absolute top-[7.5rem] left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-4xl flex items-center bg-white bg-opacity-90 rounded-full px-4 py-2 md:py-3 md:px-6 shadow-lg space-x-4"
            >
                <input
                    className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 text-sm md:text-base outline-none px-4 py-2"
                    placeholder="Serviço"
                    type="text"
                />
                <input
                    className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 text-sm md:text-base outline-none px-4 py-2 border-l border-gray-300"
                    placeholder="CEP"
                    type="text"
                />
                <button aria-label="Pesquisar">
                    <a href="#">
                        <i className="material-icons">search</i>
                    </a>
                </button>
            </div>

            <div
                id="carrossel-controles"
                className="absolute bottom-4 right-8 flex gap-2 z-10"
            >
                    <button
                        className="w-3 h-3 rounded-full bg-[#1a1464]"
                    ></button>
            </div>

            <div className="container mx-auto px-4 pt-40 pb-20 relative z-10 gap-5">
                <div className="relative w-full h-full flex flex-col justify-center top-20 gap-8 pl-10">

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
                        Suas soluções<br />
                        podem estar na rua<br />
                        de cima!
                    </h1>

                    {/*Formulario de cadastro*/}
                    <form
                        aria-label="Cadastro prestador de serviços"
                        className="bg-white flex flex-col gap-5 rounded-3xl p-6 md:p-8 drop-shadow-lg w-full max-w-md"
                    >
                        <h2 className="text-[#0a1a3a] font-bold text-lg md:text-xl mb-4">
                            Cadastre-se como<br />
                            prestador de serviços
                        </h2>
                        <label className="block text-xs md:text-sm text-gray-700 mb-1" htmlFor="email">
                            E-mail*
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            id="email"
                            placeholder="email@email.com.br"
                            required
                            type="email"
                        />
                        <button
                            className="mt-5 w-full bg-[#ff6a00] hover:bg-[#e65a00] text-white font-semibold text-sm md:text-base rounded-md py-2 md:py-3 transition-colors"
                            type="submit"
                        >
                            Cadastrar agora
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Hero;