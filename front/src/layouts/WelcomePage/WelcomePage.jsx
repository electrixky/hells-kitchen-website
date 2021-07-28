import styles from './WelcomePage.module.scss'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

const WelcomePage = () => {
	return <div className={styles.background}>
		<Navigation />
		<Logo />
	</div>
}

export default WelcomePage