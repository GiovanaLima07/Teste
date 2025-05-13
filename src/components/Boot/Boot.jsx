function Boot() {
    return (
        <>
            <section className="w-screen h-screen flex items-center justify-center rounded-2xl overflow-hidden mx-auto my-10 ">
                <div className="w-[45%] h-[80%]  rounded-l-lg bg-blue-200 flex">
                    <div className="w-[60%] h-[50%] bg-amber-50 items-start p-6 pt-15 pl-14 ">
                        <h2 className="text-4xl p-3">
                            Agora você pode conversar com a nossa
                        </h2>
                        <img />
                    </div>
                </div>
                <div className="w-[45%] h-[80%] bg-blue-300 flex flex-col items-center p-10 justify-between gap-8">
                    <div className="rounded-full h-30 w-30 bg-amber-900"></div>

                    <div className="bg-blue-100 px-6 py-5 rounded-br-3xl rounded-tl-none rounded-tr-3xl rounded-bl-3xl text-lg leading-relaxed shadow-md ml-[50%] self-start">
                    Quero contratar<br />
                    um jardineiro
                </div>

                    <div className="bg-blue-100 px-6 py-5 rounded-bl-3xl rounded-tl-3xl rounded-br-3xl text-lg leading-relaxed shadow-md mr-[50%] self-end">
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

