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

    const eventosFiltrados = eventos.filter(evento => {
        if (!filtro.data) {
            return true
        }

        const eventoFormatado = evento.inicio.toISOString().slice(0, 10)
        const filtroFormatado = filtro.data.toISOString().slice(0, 10)

        return eventoFormatado === filtroFormatado
    })

    return (
        <section>
            <Filtro />
            <div className={styles.scroll}>
                {eventosFiltrados.map(evento => (
                    <Evento evento={evento} key={evento.id} />
                ))}
            </div>
        </section>
    )
}

export default ListaDeEventos
