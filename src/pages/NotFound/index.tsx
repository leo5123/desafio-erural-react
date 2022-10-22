import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';


export default function NotFound(){
    const navigate = useNavigate();
    return(
        <div className={styles.container}>
            Página não encontrada...  
            <button
                onClick={()=> navigate(-1) }
            >{'< Voltar'}</button>
        </div>
    );
}