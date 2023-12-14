import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import Card from '@/components/Card'
import Formulario from '@/components/Formulario'
import ListaDeEventos from '@/components/ListaDeEventos'
import Calendario from '@/components/Calendario'
import styles from './Inicio.module.scss'

const Inicio: React.FC = () => {
    const [filtro, setFiltro] = useState<Date | null>()

    const aplicarFiltro = (data: Date | null) => {
        setFiltro(data)
    }

    const filtrados = !filtro
        ? eventos
        : eventos.filter(evento =>
            filtro!.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
        )

    return (
        <RecoilRoot>
            <div className={styles.grid}>
                <div>
                    <Card>
                        <Formulario />
                    </Card>
                    <hr />
                    <Card>
                        <ListaDeEventos
                            aoFiltroAplicado={aplicarFiltro}
                        />
                    </Card>
                </div>
                <div>
                    <Calendario />
                </div>
            </div>
        </RecoilRoot>
    )
}

export default Inicio
