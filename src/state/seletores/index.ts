import { selector } from 'recoil'
import { filtroDeEventos, listaDeEventosState } from '@/state/atom'

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)

        const eventos = todosOsEventos.filter(evento => {
            if (!filtro.data) {
                return true
            }

            const eventoFormatado = evento.inicio.toISOString().slice(0, 10)
            const filtroFormatado = filtro.data.toISOString().slice(0, 10)

            return eventoFormatado === filtroFormatado
        })

        return eventos
    }
})
