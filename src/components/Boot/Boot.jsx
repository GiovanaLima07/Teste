import './Boot.css';

function Boot() {
    return (
        <>
            <section id='boot' className="w-screen h-screen flex items-center justify-center rounded-2xl overflow-hidden mx-auto my-10 text-[#fff]">
                <div id='boot-titulo' className="w-[45%] h-[80%]  rounded-tl-3xl rounded-bl-3xl bg-[#304FE5] flex p-10">
                    <div id='quadro' className="w-[60%] h-[50%] bg-[#00004C] items-start p-6 pt-15 pl-14 py-5 rounded-br-3xl rounded-tr-3xl rounded-bl-3xl ">
                        <h2 className="z-10">
                            Agora você pode conversar com a nossa IA
                        </h2>
                        <img />
                    </div>
                </div>
                <div id='boot-texto' className="w-[45%] h-[80%] bg-[#ECEFF9] flex flex-col items-center p-10 justify-between gap-7 rounded-tr-3xl rounded-br-3xl">
                    <div className="rounded-full h-30 w-30 bg-amber-900"></div>

                    <div className="bg-[#7D43EB] px-6 py-5 rounded-br-3xl rounded-tl-none rounded-tr-3xl rounded-bl-3xl text-lg leading-relaxed shadow-md ml-[50%] self-start">
                    Quero contratar<br />
                    um jardineiro
                </div>

                    <div className="bg-[#FF7900] px-6 py-5 rounded-bl-3xl rounded-tl-3xl rounded-br-3xl text-lg leading-relaxed shadow-md mr-[50%] self-end">
                    Encontraremos<br />
                    um mais próximo<br />
                    de você
                </div>


                    {/* Campo de mensagem */}
                    <div className="w-[100%] bg-white p-2 rounded-full shadow-inner flex items-center justify-center">
                        <input
                            className="w-full px-4 py-2 rounded-full text-gray-600 outline-none"
                            type="text"
                            placeholder="Escrever mensagem"
                        />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Boot;

