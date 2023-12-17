import { useListaDeEventos } from '@/hooks/useListaDeEventos'
import Filtro from '@/components/Filtro'
import Evento from '@/components/Evento'
import styles from './ListaDeEventos.module.scss'

const ListaDeEventos: React.FC = () => {
    const { eventos } = useListaDeEventos()

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
