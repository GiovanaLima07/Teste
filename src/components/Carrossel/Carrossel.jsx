import './Carrossel.css';

function Carrossel() {
    return (
        <>
            <section id='carrossel' className="w-full h-screen px-10 flex items-center">
                <div id='textos-carrossel' className="w-[40%] h-[75%] p-10 flex flex-col place-content-between bg-[#DADADA]">
                    <h2 className="text-6xl font-[#FF7900]">Contrate um jardineiro</h2>
                    <p className="text-3xl">Aqui você pode encontrar o profissional que precisa</p>
                    <button className="p-10 bg-amber-600">Clique aqui</button>
                </div>
                <div id='img-carrossel' className="w-[60%] h-[75%] z-0 bg-amber-600 relative">
                    <div className='absolute bottom-0 left-0 right-0 flex  px-5 py-4'>
                        <span className="material-symbols-outlined text-white text-4xl cursor-pointer">
                            chevron_left
                        </span>
                        <div className='h-5 w-[95%] bg-blue-300'>
                            <div className='h-5 w-1/5 bg-white'></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <span className="material-symbols-outlined text-white text-4xl cursor-pointer">
                            chevron_right
                        </span>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Carrossel

