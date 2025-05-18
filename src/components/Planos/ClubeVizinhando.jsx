import './Planos.css';

function ClubeVizinhando() {
    return (
        <>
            <div id='titulo' className="w-screen h-[80%] flex flex-col items-center pb-20 gap-[5%]">
                <h2 className=' text-4xl'>
                    NOSSOS PLANOS
                </h2>
                <div className="w-[80%] h-screen  flex flex-col items-center bg-amber-50 gap-[20%]">
                    <div className="flex w-[100%] h-[80%] pt-10 px-10">
                        <div id='clube-textos'className="flex flex-col w-[60%] items-start justify-center gap-10">
                            <p className="w-[50%] text-4xl">Venha fazer parte do nosso clube Vizinhando por <span>R$9,99!</span></p>
                            <button className='bg-orange-400 p-5'>
                                Clique aqui!
                            </button>
                        </div>
                        <div id='img-planos' className="bg-cyan-200 w-[65%] h-[100%]">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClubeVizinhando