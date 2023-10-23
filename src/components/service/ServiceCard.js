import { BsFillTrashFill } from 'react-icons/bs'
import styles from '../project/ProjectCard.module.css'


function ServiceCard({ id, name, yuprojet, description, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, yuprojet)
    }


    return (
        <div className={styles.project_card}>
            <h4 className={styles.project_card}>{name}</h4>

            <p>
                <span className={styles.project_card} >Custo: R${yuprojet}</span>
            </p>
            <p>
                <span ></span> {description}
            </p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill /> Deletar
                </button>
            </div>
        </div>
    )
}
export default ServiceCard