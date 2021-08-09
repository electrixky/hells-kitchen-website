import styles from './WelcomePage.module.scss'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

const WelcomePage = () => {
	return <div className={styles.background} id='home'>
		<Navigation />
		<Logo />
		<a className={styles.arrow} href="#menu" >
			<i class="fa fa-chevron-down" aria-hidden="true"></i>
		</a>
	</div>
}

export default WelcomePage