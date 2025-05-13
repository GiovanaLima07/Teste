import './Header.css';

function Header() {
    return (
        <>
            <nav className="fixed flex items-center h-26 w-full justify-between px-8 shadow-2xl border-b border-gray-200 z-50 bg-white/30 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <img src="/Logo.png" className="w-15 h-15" alt="Logo" />
                    <img src="/Tipografia.png" className="w-50 h-15" alt="Tipografia" />
                </div>
                <div className="flex gap-8 items-center">
                    <ul className="flex items-center gap-5">
                        <li><a href="#" className="hover:text-blue-600">Sobre</a></li>
                        <li><a href="#" className="hover:text-blue-600">Serviços</a></li>
                    </ul>
                    <div className="h-15 w-50 bg-[#000C4C] flex items-center justify-center gap-5 rounded-xl">
                        <a href="#" className="text-white">Entrar</a>
                        <a href="#" className="text-white">Cadastrar-se</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;