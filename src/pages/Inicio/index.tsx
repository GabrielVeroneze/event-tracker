import { useState } from 'react'
import { IEvento } from '@/interfaces/IEvento'
import Card from '@/components/Card'
import Formulario from '@/components/Formulario'
import ListaDeEventos from '@/components/ListaDeEventos'
import Calendario from '@/components/Calendario'
import styles from './Inicio.module.scss'

const Inicio: React.FC = () => {

    const [filtro, setFiltro] = useState<Date | null>()

    const adicionarEvento = (evento: IEvento) => {
        evento.id = Math.round(new Date().getTime() / 1000)
        eventos.push(evento)
        console.log(eventos)

        setEventos([...eventos])
    }

    const alterarStatusEvento = (id: number) => {
        const evento = eventos.find(evento => evento.id === id)

        if (evento) {
            evento.completo = !evento.completo
        }

        setEventos([...eventos])
    }

    const deletarEvento = (id: number) => {
        setEventos([...eventos.filter(evento => evento.id !== id)])
    }

    const aplicarFiltro = (data: Date | null) => {
        setFiltro(data)
    }

    const filtrados = !filtro
        ? eventos
        : eventos.filter(evento =>
            filtro!.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
        )

    return (
        <div className={styles.grid}>
            <div>
                <Card>
                    <Formulario aoSalvar={adicionarEvento} />
                </Card>
                <hr />
                <Card>
                    <ListaDeEventos
                        aoFiltroAplicado={aplicarFiltro}
                        aoAlterarStatus={alterarStatusEvento}
                        aoDeletarEvento={deletarEvento}
                    />
                </Card>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Inicio
