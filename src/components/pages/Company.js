import styles from './Company.module.css'
function Company() {
    return (
      <>
        <div className={styles.container}>
            <div className={styles.card_company}>
                <div className={styles.img}>
                </div>
                <div className={styles.content}>
                    <span className={styles.title}>Uma empresa feita por nós para você!</span>
                    <p className={styles.content}>
                    sed egestas augue pellentesque non. Nulla mattis vitae diam a consectetur. Nullam rhoncus dui molestie,
                        consectetur augue eu, vulputate nisi. Phasellus venenatis eget turpis at mollis. Suspendisse iaculis non augue mattis commodo.
                        Cras ante lectus, imperdiet vitae aliquam quis, interdum sed sem.
                        Praesent convallis elit tortor,
                        sed egestas augue pellentesque non. Nulla mattis vitae diam a consectetur. Nullam rhoncus dui molestie,
                        consectetur augue eu, vulputate nisi. Phasellus venenatis eget turpis at mollis. Suspendisse iaculis non augue mattis commodo.</p>
                </div>
                <h2>Quem somos?</h2>
                <div className={styles.arrow}>
                    <span>&#8673;</span>
                </div>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.card_company}>
                <div className={styles.img2}>
                </div>
                <div className={styles.content}>
                    <span className={styles.title}>Seus sonhos viraram realidade!</span>
                    <p className={styles.content}>
                    sed egestas augue pellentesque non. Nulla mattis vitae diam a consectetur. Nullam rhoncus dui molestie,
                        consectetur augue eu, vulputate nisi. Phasellus venenatis eget turpis at mollis. Suspendisse iaculis non augue mattis commodo.
                        Cras ante lectus, imperdiet vitae aliquam quis, interdum sed sem.
                        Praesent convallis elit tortor,
                        sed egestas augue pellentesque non. Nulla mattis vitae diam a consectetur. Nullam rhoncus dui molestie,
                        consectetur augue eu, vulputate nisi. Phasellus venenatis eget turpis at mollis. Suspendisse iaculis non augue mattis commodo.</p>
                </div>
                <h2>Nossos Valores</h2>
                <div className={styles.arrow}>
                    <span>&#8673;</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default Company