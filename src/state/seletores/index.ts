import { selector } from 'recoil'
import { filtroDeEventos, listaDeEventosState } from '@/state/atom'
import { IEvento } from '@/interfaces/IEvento'

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)

        const eventos = todosOsEventos.filter(evento => {
            const eventoFormatado = evento.inicio.toISOString().slice(0, 10)
            const filtroFormatado = filtro.data?.toISOString().slice(0, 10)

            const passaFiltragemData = !filtro.data || eventoFormatado === filtroFormatado;

            switch (filtro.status) {
                case 'completo':
                    return passaFiltragemData && evento.completo === true
                case 'incompleto':
                    return passaFiltragemData && evento.completo === false
                default:
                    return passaFiltragemData
            }
        })

        return eventos
    }
})

export const eventosAsync = selector({
    key: 'eventosAsync',
    get: async () => {
        const resposta = await fetch('http://localhost:3000/eventos')
        const eventosJson: IEvento[] = await resposta.json()

        return eventosJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }
})