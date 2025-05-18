import './Avaliacao.css';
import AvaliacaoCard from './AvaliacaoCard';

function Avaliacao() {
    return (
        <>
            <section className=' w-screen h-screen text-center '>
                <div>
                    <h2 className='h-[20%] pt-10 text-4xl'>O que estão dizendo sobre o vizinhando</h2>
                </div>
                <div className=' w-screen h-[80%] flex justify-center items-center gap-[5%] px-10'>
                    <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
                <AvaliacaoCard />
                <span className="material-symbols-outlined">
                    arrow_forward_ios
                </span>
                </div>
            </section>
        </>
    )
}

export default Avaliacao