import { atom } from 'recoil'
import { eventosAsync } from '@/state/seletores'
import { IEvento } from '@/interfaces/IEvento'
import { IFiltroDeEventos } from '@/interfaces/IFiltroDeEventos'

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventosAsync,
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {},
})
