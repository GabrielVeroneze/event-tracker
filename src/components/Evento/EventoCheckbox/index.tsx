import { useAtualizarEvento } from '@/hooks/useAtualizarEvento'
import { IEvento } from '@/interfaces/IEvento'

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
    const { atualizarEvento } = useAtualizarEvento()

    const alterarStatus = () => {
        atualizarEvento({
            id: evento.id,
            completo: !evento.completo
        })
    }

    const estilos = [
        'far',
        'fa-2x',
        evento.completo ? 'fa-check-square' : 'fa-square',
    ]

    return (
        <i
            className={estilos.join(' ')}
            onClick={alterarStatus}
        ></i>
    )
}

export default EventoCheckbox
