import Kalend, { CalendarView } from 'kalend'
import { IEvento } from '@/interfaces/IEvento'
import ptBR from './localizacao/ptBR.json'
import styles from './Calendario.module.scss'
import 'kalend/dist/styles/index.css'

interface IKalendEvento {
    id?: number
    startAt: string
    endAt: string
    summary: string
    color: string
}

const Calendario: React.FC<{ eventos: IEvento[] }> = ({ eventos }) => {
    const eventosKalend = new Map<string, IKalendEvento[]>()

    eventos.forEach(evento => {
        const chave = evento.inicio.toISOString().slice(0, 10)
        
        if (!eventosKalend.has(chave)) {
            eventosKalend.set(chave, [])
        }

        eventosKalend.get(chave)?.push({
            id: evento.id,
            startAt: evento.inicio.toISOString(),
            endAt: evento.fim.toISOString(),
            summary: evento.descricao,
            color: 'blue',
        })
    })

    return (
        <div className={styles.container}>
            <Kalend
                events={Object.fromEntries(eventosKalend)}
                initialDate={new Date().toISOString()}
                hourHeight={60}
                initialView={CalendarView.WEEK}
                timeFormat={'24'}
                weekDayStart={'Monday'}
                calendarIDsHidden={['work']}
                language={'customLanguage'}
                customLanguage={ptBR}
            />
        </div>
    )
}

export default Calendario
