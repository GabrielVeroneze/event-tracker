import { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import DebugObserver from '@/components/DebugObserver'
import Card from '@/components/Card'
import Formulario from '@/components/Formulario'
import ListaDeEventos from '@/components/ListaDeEventos'
import Calendario from '@/components/Calendario'
import styles from './Inicio.module.scss'

const Inicio: React.FC = () => {
    return (
        <RecoilRoot>
            <DebugObserver />
            <div className={styles.grid}>
                <div>
                    <Card>
                        <Formulario />
                    </Card>
                    <hr />
                    <Card>
                        <Suspense>
                            <ListaDeEventos />
                        </Suspense>
                    </Card>
                </div>
                <div>
                    <Suspense>
                        <Calendario />
                    </Suspense>
                </div>
            </div>
        </RecoilRoot>
    )
}

export default Inicio
