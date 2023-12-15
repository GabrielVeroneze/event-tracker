import { useListaDeEventos } from '@/hooks/useListaDeEventos'
import Filtro from '@/components/Filtro'
import Evento from '@/components/Evento'
import styles from './ListaDeEventos.module.scss'

const ListaDeEventos: React.FC<{
    aoFiltroAplicado: (data: Date | null) => void
}> = ({ aoFiltroAplicado }) => {
    const { eventos } = useListaDeEventos()

    return (
        <section>
            <Filtro aoFiltroAplicado={aoFiltroAplicado} />
            <div className={styles.scroll}>
                {eventos.map(evento => (
                    <Evento evento={evento} key={evento.id} />
                ))}
            </div>
        </section>
    )
}

export default ListaDeEventos
