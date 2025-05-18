function PlanosCard() {
    return (
        <div className="bg-blue-500 p-[5%] flex flex-col gap-[20%] h-screen justify-center">
            <h2 className="text-center text-4xl">Plano <br /> Cliente Vizinho</h2>
            <div className="bg-white p-[5%] flex flex-col gap-5">
                <div className="flex gap-10">

                    <div className="flex flex-col gap-5 h-[60%]">
                        <h3>Plano gratuito</h3>
                        <div className="flex gap-[10%]">
                            <ul>
                                <li className="flex items-center justify-between">
                                    Acesso total a plataforma
                                    <span className="material-symbols-outlined">check</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    Contrate qualquer serviço
                                    <span className="material-symbols-outlined">check</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    Venda seus serviços
                                    <span className="material-symbols-outlined">check</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    Sem anúncios
                                    <span className="material-symbols-outlined">close</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3>Plano Cliente vizinho</h3>
                        <div className="flex gap-[10%]">
                            <ul>
                                <li className="flex items-center justify-between">
                                    Acesso total a plataforma
                                    <span className="material-symbols-outlined">check</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    Contrate qualquer serviço
                                    <span className="material-symbols-outlined">check</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    Venda seus serviços
                                    <span className="material-symbols-outlined">check</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    Sem anúncios
                                    <span className="material-symbols-outlined">close</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button className="bg-white p-[2%]">Adquirir!</button>
        </div>
    );
}

export default PlanosCard;
