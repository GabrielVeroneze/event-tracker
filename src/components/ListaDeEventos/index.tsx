import { useRecoilValue } from 'recoil'
import { filtroDeEventos } from '@/state/atom'
import { useListaDeEventos } from '@/hooks/useListaDeEventos'
import { IFiltroDeEventos } from '@/interfaces/IFiltroDeEventos'
import Filtro from '@/components/Filtro'
import Evento from '@/components/Evento'
import styles from './ListaDeEventos.module.scss'

const ListaDeEventos: React.FC = () => {
    const { eventos } = useListaDeEventos()
    const filtro = useRecoilValue<IFiltroDeEventos>(filtroDeEventos)


    return (
        <section>
            <Filtro />
            <div className={styles.scroll}>
                {eventos.map(evento => (
                    <Evento evento={evento} key={evento.id} />
                ))}
            </div>
        </section>
    )
}

export default ListaDeEventos
