import './Footer.css';

function Footer() {
    return (
        <>
            <footer id="rodaPe" className="w-screen h-[50%] bg-blue-900 flex flex-col justify-between p-4 text-white pt-10">

            <div id='lista' className="flex justify-between">
                <ul className="flex flex-col gap-2">
                    <li>Sobre nós</li>
                    <li>Conheça o vizinhando</li>
                    <li>Missão</li>
                    <li>Nossos parceiros</li>
                </ul>

                <hr id='linha2' className="my-2 border-gray-400"  />

                <div id='imagens' className="flex flex-col items-end gap-1">
                    <div className="flex items-end gap-2">
                        <img src="/Logo.png" alt="logo" className="w-20" />
                        <img src="Tipografia.png" alt="tipografia" className="w-65" />
                    </div>
                    <span>Vizinhando © 2024 | Todos os direitos reservados.</span>
                </div>
            </div>

            <hr id='linha' className="my-2 border-gray-400"  />

            <div id='outros' className="flex justify-between items-end">
                <div id='span' className="flex gap-6">
                    <span>Política de privacidade</span>
                    <span>Termos de uso</span>
                </div>
                <div className="flex gap-6">
                    <img src="/FooterIcons/facebook.png" alt="facebook" />
                    <img src="/FooterIcons/facebook.png" alt="facebook" />
                    <img src="/FooterIcons/facebook.png" alt="facebook" />
                    <img src="/FooterIcons/facebook.png" alt="facebook" />
                    <img src="/FooterIcons/facebook.png" alt="facebook" />
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer