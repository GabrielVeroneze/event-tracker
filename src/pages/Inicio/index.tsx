import { RecoilRoot } from 'recoil'
import Card from '@/components/Card'
import Formulario from '@/components/Formulario'
import ListaDeEventos from '@/components/ListaDeEventos'
import Calendario from '@/components/Calendario'
import styles from './Inicio.module.scss'

const Inicio: React.FC = () => {
    return (
        <RecoilRoot>
            <div className={styles.grid}>
                <div>
                    <Card>
                        <Formulario />
                    </Card>
                    <hr />
                    <Card>
                        <ListaDeEventos />
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
