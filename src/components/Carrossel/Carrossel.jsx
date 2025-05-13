
function Carrossel(){
    return(
        <>
            <section className="w-full h-screen p-10 flex items-center">
                <div className="w-[40%] h-[75%] p-10 flex flex-col place-content-between bg-amber-50">
                    <h2 className="text-6xl">Contrate um jardineiro</h2>
                    <p className="text-3xl">Aqui você pode encontrar o profissional que precisa</p>
                    <button className="p-10 bg-amber-300">Clique aqui</button>
                </div>
                <div className="w-[60%] h-[75%] bg-amber-600">
                    <img src="./" alt="" />
                </div>
            </section>
        </>
    )
}

export default Carrossel

