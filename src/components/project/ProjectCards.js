import styles from './ProjectCard.module.css'
import {Link} from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCards({ id, name, budget, category, handleRemove }) {
   
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (   
        <div className={styles.project_card}>
            <h4 className={styles.project_card}>{name}</h4>

            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to= {`/projectedit/${id}`}>
                    <BsPencil/> Editar
                </Link>
                <button onClick={remove}>
                <BsFillTrashFill/> Deletar
                </button>
            </div>
        </div>
    )
}
export default ProjectCards 