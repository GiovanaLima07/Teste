import './Planos.css';
import PlanosCard from './PlanosCard';


function Planos(){
    return(
        <>
            <section className='w-screen h-screen'>
                <div id='planos' className='w-auto h-[70%] flex gap-[5%] justify-center'>
                    <PlanosCard className= 'w-1/2' />
                    <PlanosCard className= 'w-1/2' />
                </div>
            </section>
        </>
    )
}

export default Planos