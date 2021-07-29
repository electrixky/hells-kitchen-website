import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.items}>
				<li className={styles.item}><a className={styles.link} href="#home">HOME</a></li>
				<li className={styles.item}><a className={styles.link} href="#menu">MENU</a></li>
				<li className={styles.item}><a className={styles.link} href="#reserve">RESERVE</a></li>
				<li className={styles.item}><a className={styles.link} href="#gallery">GALLERY</a></li>
				<li className={styles.item}><a className={styles.link} href="#about">ABOUT</a></li>
				<li className={styles.item}><a className={styles.link} href="#contacts">CONTACTS</a></li>
			</ul>
		</nav>
	)
}

export default Navigation