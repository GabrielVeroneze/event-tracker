import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import { useListaDeEventos } from '@/hooks/useListaDeEventos'
import { useAtualizarEvento } from '@/hooks/useAtualizarEvento'
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

const Calendario: React.FC = () => {
    const { eventos } = useListaDeEventos()
    const { atualizarEvento } = useAtualizarEvento()
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

    // Transforma o Map em um array de 'CalendarEvent'
    const eventosParaKalend = Array.from(eventosKalend.values()).flatMap(eventosDoDia =>
        eventosDoDia.map(evento => ({
            id: evento.id,
            startAt: evento.startAt,
            endAt: evento.endAt,
            summary: evento.summary,
            color: evento.color,
        }))
    )

    const onEventDragFinish: OnEventDragFinish = (
        // @ts-expect-error: kalendEventoInalterado não é usado, mas é necessário para obter kalendEventoAtualizado
        kalendEventoInalterado: CalendarEvent,
        kalendEventoAtualizado: CalendarEvent
    ) => {
        atualizarEvento({
            id: kalendEventoAtualizado.id,
            inicio: new Date(kalendEventoAtualizado.startAt),
            fim: new Date(kalendEventoAtualizado.endAt)
        })
    }

    return (
        <div className={styles.container}>
            <Kalend
                events={eventosParaKalend}
                initialDate={new Date().toISOString()}
                hourHeight={60}
                initialView={CalendarView.WEEK}
                timeFormat={'24'}
                weekDayStart={'Monday'}
                calendarIDsHidden={['work']}
                language={'customLanguage'}
                customLanguage={ptBR}
                onEventDragFinish={onEventDragFinish}
            />
        </div>
    )
}

export default Calendario
