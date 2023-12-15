import { IEvento } from '@/interfaces/IEvento'

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
    const alterarStatus = () => {
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
