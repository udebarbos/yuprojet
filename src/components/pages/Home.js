import styles from './Home.module.css'
import undraw from '../img/undraw2.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Seja bem-vindo ao <span>yuPROjet</span></h1>
            <p>Comece hoje mesmo seu projeto!</p>
            <LinkButton to = "/newproject" text ="Vamos lá!"/>
            <img  src={undraw} alt="yuPROjet"/>
        </section>
    )
}
export default Home